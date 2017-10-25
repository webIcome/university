
import DataCachePool from '../caches/data-cache-pool';
import InitDataService from './init-data-service';
import logger from '../core/logger';

export default class InitDataLoader {
    static load() {
        return InitDataService.getAllInitData().then(datas => {
            DataCachePool.setInitData(datas);
            return datas;
        }).catch(err => {
            logger.error(err);
            process.exit(1);
        });
    }

    static reload() {
        DataCachePool.clearInitData();
        return this.load();
    }
};

