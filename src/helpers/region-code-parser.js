import RequestHelper from "./request-helper";
import {Header as HeaderConstant} from "../constants/header";
import ContextHolder from "./context-holder";
import config from "../config";


export default (req, res, next) => {

    if (RequestHelper.ifInOptionsMethod(req.path, req.method)) {
        return next();
    }

    if (RequestHelper.ifInUrlFilterExclude(config.url_filter_exclude, req.path, req.method)) {
        return next();
    }

    if (RequestHelper.ifInUrlFilterExclude(config.token_filter_exclude, req.path, req.method)) {
        return next();
    } else {
        let regionCode = req.header(HeaderConstant.REGION_CODE);
        if (!regionCode) {
            let err = new Error('Forbidden');
            err.status = 403;
            return next(err);
        } else {
            _setRegionCode(regionCode).then(() => {
                return next();
            });
        }
    }

};

function _setRegionCode(regionCode) {
    return ContextHolder.getSession().then((session) => {
        session.regionCode = regionCode;
        return;
    });
}

