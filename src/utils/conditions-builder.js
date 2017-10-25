/**
 * Created by Levi on 2017/4/20.
 */
import moment from 'moment';
import Pageable from "./paging/pageable";
const PAGE = "page";
const SORT = "sort";

export default class ConditionsBuilder {

    constructor(queryParams, pageSize) {
        this._queryParams = queryParams;
        this._pageSize = pageSize;

        this._pageable = _parsePageable(this._queryParams, this._pageSize);
        this._conditions = _parseConditions(this._queryParams);
    }

    get conditions() {
        return this._conditions;
    }

    get pageable() {
        return this._pageable;
    }
};

function _parsePageable(queryParams, pageSize) {
    let page = parseInt(queryParams[PAGE]);
    page = (page) ? page : 0;

    let pageable;
    let sort = queryParams[SORT];
    if (sort) {
        pageable = new Pageable(page, pageSize, _getDirection(sort), [sort.substring(1)]);
    } else {
        pageable = new Pageable(page, pageSize, "DESC", ["id"]);
    }

    return pageable;
}

function _parseConditions(queryParams) {
    let conditions = {};
    let keys = Object.keys(queryParams);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (key == PAGE || key == SORT) {
            continue;
        }

        let value = queryParams[key];
        if (value instanceof Object) {
            conditions[key] = queryParams[key];
            continue;
        }
        if (value.indexOf("-") != -1) {
            let middleLineIndex;
            let start;
            let end;
            if (value.startsWith("d")) {
                value = value.substring(1);
                middleLineIndex = value.indexOf("-");
                start = moment(value.substring(0, middleLineIndex), "YYYYMMDDHHmmss").toDate();
                end = moment(value.substring(middleLineIndex + 1), "YYYYMMDDHHmmss").toDate();
            } else if (value.startsWith("i")) {
                value = value.substring(1);
                middleLineIndex = value.indexOf("-");
                start = Number(value.substring(0, middleLineIndex));
                end = Number(value.substring(middleLineIndex + 1));
            } else {
                middleLineIndex = value.indexOf("-");
                start = value.substring(0, middleLineIndex);
                end = value.substring(middleLineIndex + 1);
            }
            conditions[key] = {$gte: start, $lte: end};
        } else if (value.startsWith("i")) {
            conditions[key] = parseInt(value.substring(1));
        } else if (value.indexOf("*") != -1) {
            conditions[key] = {$like: value.replace(/\*/ig, '%')};
        } else if (value.startsWith("NOT IN")) {
            conditions[key] = {$notIn: _transformInValuesToArray(value.substring(value.indexOf(",") + 1))}
        } else if (value.startsWith("IN")) {
            conditions[key] = {$in: _transformInValuesToArray(value.substring(value.indexOf(",") + 1))};
        } else {
            conditions[key] = value;
        }
    }
    return conditions;
}

function _transformInValuesToArray(inValues) {
    let _inValues = inValues;
    if (inValues.startsWith("i")) {
        _inValues = _inValues.substring(2);
    }
    return _inValues.split(",");
}

function _getDirection(sort) {
    if (sort.indexOf("-") != -1) {
        return "DESC";
    } else if (sort.indexOf("+") != -1) {
        return "ASC";
    } else {
        return "ASC";
    }
}