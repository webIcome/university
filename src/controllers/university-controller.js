import UniversityService from "../services/university-service";
import ResponseHelper from "../helpers/response-helper";
import {ResponseConstant} from "../constants/index";
export default class UniversityController{

    static getUniversityById(req, res, next) {
        UniversityService.getUnversityById(req.params.id).then(data => {
            ResponseHelper.resNormal(res,ResponseConstant.UNIVERSITY, data);
        }).catch(next);
    }

    static createUniversity(req, res, next) {
        UniversityService.createUniversity(req.body).then(data => {
            ResponseHelper.resNormal(res, ResponseConstant.UNIVERSITY, data);
        }).catch(next);
    }
}