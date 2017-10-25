import {SysParameterConstant} from "../constants";
import config from '../config';
import SysParameterDao from "../daos/sys-parameter-dao";
export default class SysParameterService {

    static getParameters() {
        return new Promise((resolve, reject) => {
            let parameters = {};
            parameters[SysParameterConstant.API_GRID_DEFAULT_SIZE] = config.api_grid_default_size;
            resolve(parameters);
        });
    }

    static getAllSysParameters() {
        return SysParameterDao.getAllSysParameters();
    }

    static updateSysParameter(paramName, data) {
        return SysParameterDao.updateSysParameter(paramName, data);
    }

}