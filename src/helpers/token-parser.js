import RequestHelper from "./request-helper";
import config from "../config";
import {HeaderConstant} from "../constants";
import TokenHelper from "./token-helper";

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
        let token = req.header(HeaderConstant.XSRF_TOKEN);
        if (!token || !_ifTokenEffective(token/*, req.params[HeaderConstant.STUDENT_ID]*/)) {
            let err = new Error('Forbidden');
            err.status = 403;
            return next(err);
        } else {
            req.headers[HeaderConstant.STUDENT_ID] = _getStudentIdFromToken(token);
            return next();
        }
    }

};

function _ifTokenEffective(token, studentId) {
    return TokenHelper.checkTokenWithStudentIdParams(token, studentId);
}

function _getStudentIdFromToken(token) {
    return TokenHelper.decodeToken(token)[HeaderConstant.STUDENT_ID];
}