import StringUtils from '../utils/string-utils';

export default class RequestHelper {

    static ifInOptionsMethod(pathName, method) {
        if (method == 'OPTIONS' || pathName == "/") {
            return true;
        }
        return false;
    }

    static ifInUrlFilterExclude(filterExcludes, pathName, method) {　
        let excludes = filterExcludes.split(',');
        let index = StringUtils.lastOrdinalIndexOf(pathName, "/", 2);
        if (index == -1) {
            index = StringUtils.lastOrdinalIndexOf(pathName, "/", 1);
        }
        let resourceName;
        if (index == -1) {
            resourceName = pathName;
        } else {
            resourceName = pathName.substring(index);
        }

        for (let i in excludes) {
            let exclude = excludes[i];
            let excludeInfo = exclude.split("|");
            if (resourceName.search(excludeInfo[0]) != -1 && method == excludeInfo[1]) {
                return true;
            }
        }
        return false;
    }

}
