import {InitData} from '../domains';

export default class InitDataDao {

    static getAllInitData() {
        return InitData.findAll();
    }

}