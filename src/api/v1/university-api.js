import ResponseHelper from '../../helpers/response-helper';
import UniversityService from "../../services/university-service";
import {ResponseConstant} from "../../constants";


export default class UniversityApi {

    static getUniversityById(req, res, next) {
        UniversityService.getUnversityById(req.params.id).then(data => {
            ResponseHelper.resNormal(res, ResponseConstant.UNIVERSITY, data);
        }).catch(next);
    }

    static getUniversitiesByName(req, res, next) {
        UniversityService.getUniversitiesByName(req.query.name).then(datas => {
            ResponseHelper.resNormal(res, ResponseConstant.UNIVERSITIES, datas);
        }).catch(next);
    }


};
