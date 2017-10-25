/**
 * Created by Levi on 2017/2/21.
 */
import AbstractDataLoader from './abstract-data-loader';
import DataCachePool from '../caches/data-cache-pool';

export default class SysParameterLoader extends AbstractDataLoader {

    static load() {
        return new Promise((resolve, reject) => {
            let initDatas = Object.assign({}, DataCachePool.getParameterTable());
            let keys = Object.keys(initDatas);
            if (keys && keys.length > 0) {
                (function exec(initData) {
                    _addParameterToCache(initData).then(() => {
                        if (keys.length > 0) {
                            exec(initDatas[keys.shift()]);
                        } else {
                            resolve();
                        }
                    });
                })(initDatas[keys.shift()]);
            } else {
                resolve();
            }
        });
    };

    static reload() {
        DataCachePool.clearParameters();
        return this.load();
    };

}

function _addParameterToCache(initData) {
    return SysParameterLoader.queryByRaw(initData.table_name, initData.order_field_name).then(datas => {
        datas.forEach(function (data) {
            DataCachePool.addParameter(data[initData.code_field_name], _getValue(data[initData.name_field_name], data["param_type"]));
        });
        return;
    });
}

function _getValue(object, dataType) {
    if (dataType == "I") {
        return parseInt(object);
    } else {
        return object;
    }
}