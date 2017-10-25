import {ErrorCode} from '../constants';
import PagingResponse from "../utils/paging-response";
import config from  '../config';
import {CoreConstant} from "../constants";
import moment from "moment";

export default class ResponseHelper {

    static resXml(res, data, status) {
        res.set('Content-Type', 'text/xml');
        if (status) {
            res.status(status);
        }
        res.send(data);
    }

    static resNormal(...args) {
        if (args.length == 2) {
            _resObject(args[0], args[1])
        } else if (args.length >= 3) {
            if (typeof args[1] === 'object' && typeof args[2] === 'number') {
                _resObject(args[0], args[1], args[2]);
            } else {
                let data = {};
                data.errcode = ErrorCode.NORMAL.code;
                data.errmsg = ErrorCode.NORMAL.msg;
                data[args[1]] = args[2];
                if (args.length > 3) {
                    _resObject(args[0], data, args[3]);
                } else {
                    _resObject(args[0], data);
                }
            }
        }
    }

    static resPaging(req, res, pageImpl) {
        PagingResponse.responsePaging(req, res, pageImpl, config.sys_host);
    }

    static resSuccess(res) {
        let data = {};
        data.errcode = ErrorCode.SUCCESS.code;
        data.errmsg = ErrorCode.SUCCESS.msg;
        data.time = moment().format(CoreConstant.TIME_FORMAT_COMPACT);
        res.json(data);
    };

};

function _resObject(res, data, status) {
    if (!data.errcode || !data.errmsg) {
        data.errcode = ErrorCode.NORMAL.code;
        data.errmsg = ErrorCode.NORMAL.msg;
    }
    if (status) {
        res.status(status);
    }
    res.json(data);
}