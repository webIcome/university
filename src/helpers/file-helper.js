import {AttributeConstant} from "../constants";
export default class FileHelper {

    static getFileName(dir, name, id, preName, index, mimeType) {
        return dir + _getPathName(id, name, preName, index, mimeType);
    }

    static getFileUrl(uri, name, id, preName, index, mimeType) {
        return uri + _getPathName(id, name, preName, index, mimeType);
    }

    static getFileDir(dir, id) {
        return dir + id;
    }

}

function _getPathName(id, name, preName, index, mimeType) {
    let extName = mimeType.substring(mimeType.lastIndexOf(AttributeConstant.MARK_SLASH) + 1);
    return name + AttributeConstant.MARK_SLASH + id + AttributeConstant.MARK_SLASH + preName + AttributeConstant.MARK_UNDER_LINE + index + AttributeConstant.MARK_DOT + extName;
}
