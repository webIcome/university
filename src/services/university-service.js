import UniversityDao from "../daos/university-dao";
export default class UniversityService{

    static getUnversityById(id) {
        return UniversityDao.getUniversityById(id);
    }

    static createUniversity(data) {
        return UniversityDao.createUniversity(data);
    }

    static getUniversitiesByName(name) {
        return UniversityDao.getUniversitiesByName(name);
    }
}