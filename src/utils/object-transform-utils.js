/**
 * Created by Levi on 2017/2/27.
 */
import * as _ from "lodash";

export default class ObjectTransformUtils {

    static objectToMap(obj) {
        return new Map(_.toPairs(obj));
    }

    static fieldToLowerCase(obj) {
        return _.mapKeys(obj, (value, key) => {
            return key.toLowerCase();
        });
    }

    static objectToParameters(obj) {
        return Object.keys(obj).map(function (key) {
            return key + '=' + obj[key];
        }).join('&');
    }

}