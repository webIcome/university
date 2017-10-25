import {StudentData} from '../domains';

export default class StudentDao {

    static createStudent(student) {
        return StudentData.create(student);
    }

    static updateStudent(id, updateStudent) {
        return StudentData.update(updateStudent, {where: {id: id}})
    }

    static getStudent(phone) {
        return StudentData.findOne({
            where: {phone: phone}
        })
    }

    static findOne(queryObj) {
        return StudentData.findOne({
            where: queryObj
        })
    }

}