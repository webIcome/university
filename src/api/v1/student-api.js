/**
 * Created by webicome on 2017/9/19.
 */
import StudentService from "../../services/student-service";
import ResponseHelper from "../../helpers/response-helper";
import Tools from "../../utils/tools";
import {ResponseConstant, HeaderConstant, RequestConstant} from "../../constants";
export default class StudentApi {

    static registerStudent(req, res, next) {
        let phone = req.body[RequestConstant.PHONE];
        let password = Tools.md5(req.body[RequestConstant.PASSWORD]);
        StudentService.registerStudent(phone, password).then(data => {
            ResponseHelper.resNormal(res, ResponseConstant.XSRF_TOKEN, data);
        }).catch(next);
    }


    static getToken(req, res, next) {
        let phone = req.body[RequestConstant.PHONE];
        let password = Tools.md5(req.body[RequestConstant.PASSWORD]);
        StudentService.getToken(phone, password).then(data => {
            ResponseHelper.resNormal(res, ResponseConstant.XSRF_TOKEN, data);
        }).catch(next);
    }

    static logout(req, res, next) {
        StudentService.logout(req.header(HeaderConstant.STUDENT_ID)).then(data => {
            ResponseHelper.resSuccess(res);
        }).catch(next)
    }

    static updateStudent(req, res, next) {
        StudentService.updateStudent(req.header(HeaderConstant.STUDENT_ID), req.body).then(data => {
            ResponseHelper.resNormal(res, ResponseConstant.STUDENT, data);
        }).catch(next)
    }

    static getStudent(req, res, next) {
        StudentService.getStudent(req.header(HeaderConstant.STUDENT_ID)).then(data => {
            ResponseHelper.resNormal(res, ResponseConstant.STUDENT, data);
        }).catch(next)
    }

}