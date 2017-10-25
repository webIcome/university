import {HeaderConstant, AttributeConstant, CoreConstant} from "../constants";
import ContextHolder from "./context-holder";
import RequestHelper from "./request-helper";
import config from "../config";


export default (req, res, next) => {
    if (RequestHelper.ifInOptionsMethod(req.path, req.method)) {
        return next();
    } else {
        if (RequestHelper.ifInUrlFilterExclude(config.url_filter_exclude, req.path, req.method)) {
            return next();
        }
        let deviceUnionIdOfEncode = req.header(HeaderConstant.DEVICE_UNIONID);
        if (deviceUnionIdOfEncode) {
            let deviceUnionid = new Buffer(deviceUnionIdOfEncode, "base64").toString();
            let deviceInfo = deviceUnionid.split(AttributeConstant.MARK_COLON);
            let deviceType;
            let deviceId;
            if (deviceInfo.length > 1) {
                deviceType = deviceInfo[0].toLowerCase();
                deviceId = deviceInfo[1];
            } else {
                deviceType = CoreConstant.CLIENT_TYPE_APP;
                deviceId = deviceInfo[0];
                deviceUnionid = CoreConstant.CLIENT_TYPE_APP + AttributeConstant.MARK_COLON + deviceId;
            }
            ContextHolder.getSession().then((session) => {
                session.deviceType = deviceType;
                session.deviceId = deviceId;
                req.headers[HeaderConstant.DEVICE_ID] = deviceId;
                req.headers[HeaderConstant.DEVICE_UNIONID] = deviceUnionid;
                return next();
            });
        } else {
            let err = new Error('Forbidden');
            err.status = 403;
            return next(err);
        }
    }
}