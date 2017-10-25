
import InitDataDao from '../daos/init-data-dao';

export default class InitDataService {

    static getAllInitData() {
        return InitDataDao.getAllInitData();
    }

}