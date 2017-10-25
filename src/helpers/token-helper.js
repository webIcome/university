import config from '../config';
import {ResponseConstant, HeaderConstant} from "../constants";
import moment from "moment";
import jwt from 'jwt-simple';
import {app} from '../app';
export default class TokenHelper {

    static getTokenInfo(studentId, tokenExpiresIn) {
        let tokenInfo = {};
        if(studentId) {
            tokenInfo[HeaderConstant.STUDENT_ID] = studentId;
        }
        if (tokenExpiresIn) {
            tokenInfo[ResponseConstant.EXPIRES_IN] = moment().add(tokenExpiresIn, 'days').valueOf();
        } else {
            tokenInfo[ResponseConstant.EXPIRES_IN] = moment().add(config.token_expires_in, 'days').valueOf();
        }
        return jwt.encode(tokenInfo, app.get(config.jwt_token_secret_name));
    }


    static checkTokenWithStudentIdParams(token, studentId) {
        let obj = this.decodeToken(token);
        if (!studentId) {
            return this.checkToken(token)
        } else {
            return this.checkToken(token) && obj[HeaderConstant.STUDENT_ID] == studentId;
        }
    }

    static checkToken(token) {
        let obj = this.decodeToken(token);
        if (obj[HeaderConstant.STUDENT_ID] && obj[ResponseConstant.EXPIRES_IN] && obj[ResponseConstant.EXPIRES_IN] > moment().valueOf()) {
            return true;
        }
        return false;
    }

    static decodeToken(token) {
        return jwt.decode(token, app.get(config.jwt_token_secret_name));
    }
};


