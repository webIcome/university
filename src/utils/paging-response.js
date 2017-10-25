/**
 * Created by Levi on 2017/4/20.
 */
import url from 'url';
import {HeaderConstant} from "../constants";

const PAGE = "page";

export default class PagingResponse {

    static responsePaging(req, res, pageImpl, replaceHost) {
        let uri = _getUri(req, replaceHost);
        res.set(HeaderConstant.X_TOTAL_COUNT, pageImpl.totalElements);
        res.links(_getLinks(uri, pageImpl));
        res.json(pageImpl.content);
    }

};

function _getUri(req, replaceHost) {
    let host = replaceHost;
    if (!host) {
        host = req.get('host');
    }
    return url.format({
        protocol: req.protocol,
        host: host,
        pathname: req.path,
        query: req.query
    });
}

function _getLinks(uri, pageImpl) {
    let links = {
        first: _getFirstLink(uri, pageImpl),
        next: _getNextLink(uri, pageImpl),
        previous: _getPreviousLink(uri, pageImpl),
        last: _getLastLink(uri, pageImpl)
    };
    Object.keys(links).forEach(key => {
        if (!links[key]) {
            delete links[key];
        }
    });
    return links;
}

function _getFirstLink(uri, pageImpl) {
    if (!pageImpl.isFirstPage()) {
        return _appendParam(uri, PAGE, 0);
    }
    return null;
}

function _getNextLink(uri, pageImpl) {
    if (pageImpl.hasNextPage()) {
        return _appendParam(uri, PAGE, pageImpl.number + 1);
    }
}

function _getPreviousLink(uri, pageImpl) {
    if (pageImpl.hasPreviousPage()) {
        return _appendParam(uri, PAGE, pageImpl.number - 1);
    }
}

function _getLastLink(uri, pageImpl) {
    if (!pageImpl.isLastPage()) {
        return _appendParam(uri, PAGE, pageImpl.totalPages - 1);
    }
    return null;
}

function _appendParam(uri, paramKey, paramValue) {
    let uriObj = url.parse(uri, true);
    delete  uriObj.search;
    uriObj.query[paramKey] = paramValue;
    return url.format(uriObj);
}
