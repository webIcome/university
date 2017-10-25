import {UniversityData} from '../domains';

export default class UniversityDao {

    static getUniversityById(id) {
        return UniversityData.findById(id);
    }

    static createUniversity(university) {
        return UniversityData.create(university);
    }

    static getUniversitiesByName(name) {
        return UniversityData.findAll({
            where: {
                name: {$like: '%' + name + '%'}
            }
        })
    }

}