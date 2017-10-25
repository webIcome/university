import NodeCache from 'node-cache';
import MapTransformUtils from "../utils/map-transform-utils";

const INIT_DATA_KEY = "INIT_DATA";
const PARAMETER_KEY = "PARAMETER";
const DICTIONARY_KEY = "DICTIONARY";
const CONTROL_KEY = "CONTROL";
const PARAMETER_DATA_KEY = "PARAMETER_DATA";
const DICTIONARY_DATA_KEY = "DICTIONARY_DATA";
const CONTROL_DATA_KEY = "CONTROL_DATA";

const cache = new NodeCache();

export default class DataCachePool {

    static setInitData(initDatas) {
        initDatas.forEach((initData) => {
            if (initData.table_type == 3) {
                _addValue(PARAMETER_KEY, initData.table_alias, initData);
            } else if (initData.table_type == 1) {
                _addValue(DICTIONARY_KEY, initData.table_alias, initData);
            } else if (initData.table_type == 2) {
                _addValue(CONTROL_KEY, initData.table_alias, initData);
            } else {
            }
        });
    }

    static clearInitData() {
        cache.del(INIT_DATA_KEY);
        cache.del(PARAMETER_KEY);
        cache.del(DICTIONARY_KEY);
        cache.del(CONTROL_KEY);
    };

    static getParameterTable() {
        return _getObject(PARAMETER_KEY);
    };

    static getDictionaryTable() {
        return _getObject(DICTIONARY_KEY);
    };

    static getControlTable() {
        return _getObject(CONTROL_KEY);
    }

    static addParameter(name, value) {
        _addValue(PARAMETER_DATA_KEY, name, value);
    };

    static addDictionary(alias, value) {
        _addValue(DICTIONARY_DATA_KEY, alias, value);
    };

    static addControl(alias, value) {
        _addValue(CONTROL_DATA_KEY, alias, value);
    }

    static getParameter(name) {
        return _getValue(PARAMETER_DATA_KEY, name);
    };

    static getDictionary(alias) {
        return _getValue(DICTIONARY_DATA_KEY, alias);
    };

    static getDictionaryValue(alias, code) {
        return this.getDictionary(alias)[code];
    };

    static getDictionaryCode(alias, value) {
        let result = this.getDictionary(alias);
        for (let code of Object.keys(result)) {
            if (value == result[code]) {
                return code;
            }
        }
        return null;
    };

    static getControl(alias) {
        return _getValue(CONTROL_DATA_KEY, alias);
    }

    static getControlRow(alias, fieldName, fieldValue) {
        let controls = this.getControl(alias);
        for (let row of controls) {
            if (row.get(fieldName) == fieldValue) {
                return MapTransformUtils.mapToObject(row);
            }
        }
        return null;
    }

    static findControlRows(alias, filedName, fieldValue) {
        let controls = this.getControl(alias);
        let result = [];
        for (let row of controls) {
            if (row.get(filedName) == fieldValue) {
                result.push(MapTransformUtils.mapToObject(row));
            }
        }
        return result;
    }

    static clearParameters() {
        cache.del(PARAMETER_DATA_KEY);
    };

    static clearDictionaries() {
        cache.del(DICTIONARY_DATA_KEY);
    };

    static clearControls() {
        cache.del(CONTROL_DATA_KEY);
    }
}

function _getValue(objectName, name) {
    return _getObject(objectName)[name];
}

function _addValue(objectName, name, value) {
    var object = _getObject(objectName);
    object[name] = value;
    _setObject(objectName, object);
}

function _getObject(objectName) {
    if (!cache.get(objectName)) {
        cache.set(objectName, {});
    }
    return cache.get(objectName);
}

function _setObject(objectName, object) {
    cache.set(objectName, object);
}
