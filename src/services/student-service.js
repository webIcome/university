/**
 * Created by webicome on 2017/9/19.
 */
import StudentDao from "../daos/student-dao";
import {RequestConstant} from "../constants";
import Config from "../config";
import RecordExistError from "../errors/record-exist-error";
import TokenHelper from "../helpers/token-helper";
import VerifyFailError from "../errors/verify-fail-error";
export default class StudentService {

    static async registerStudent(phone, password) {
        let student = await StudentDao.findOne({phone: phone});
        if (student) {
            throw new RecordExistError();
        } else {
            await StudentDao.createStudent(_generateStudent(phone, password));
            return this.getToken(phone, password);
        }
    }

    static async getToken(phone, password) {
        let student = await this.verify(phone, password);
        await this.login(student.id);
        return TokenHelper.getTokenInfo(student.id);
    }


    static login(id) {
        return this.updateStudent(id, {is_login: true});
    }

    static logout(id) {
        return this.updateStudent(id, {is_login: false});
    }

    static updateStudent(id, updateStudent) {
        return StudentDao.updateStudent(id, updateStudent);
    }

    static async getStudent(id) {
        return StudentDao.findOne({id: id})
    }

    static async verify(phone, password) {
        let student = await StudentDao.findOne({phone: phone, password: password});
        if (student) {
            return student;
        } else {
            throw new VerifyFailError();
        }
    }
}

function _generateStudent(phone, password) {
    let student = {};
    student[RequestConstant.NICKNAME] = Config.nickname_pre_name + phone.substr(6);
    student[RequestConstant.PHONE] = phone;
    student[RequestConstant.PASSWORD] = password;
    return student;
}