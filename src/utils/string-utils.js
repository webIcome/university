
const INDEX_NOT_FOUND = -1;

export default class StringUtils {

    static lastOrdinalIndexOf(str, searchStr, ordinal) {
        return _ordinalIndexOf(str, searchStr, ordinal, true);
    }

    static ordinalIndexOf(str, searchStr, ordinal) {
        return _ordinalIndexOf(str, searchStr, ordinal, false);
    }

}

function _ordinalIndexOf(str, searchStr, ordinal, lastIndex) {
    if (str == null || searchStr == null || ordinal <= 0) {
        return INDEX_NOT_FOUND;
    }
    if (searchStr.length == 0) {
        return lastIndex ? str.length : 0;
    }
    let found = 0;
    let index = lastIndex ? str.length : INDEX_NOT_FOUND;

    do {
        if (lastIndex) {
            index = str.lastIndexOf(searchStr, index - 1);
        } else {
            index = str.indexOf(searchStr, index + 1);
        }
        if (index < 0) {
            return index;
        }
        found++;
    } while (found < ordinal);
    return index;
}