/**
 * Created by Levi on 2017/2/27.
 */
import * as _ from "lodash";

export default class MapTransformUtils {

    static mapToObject(map) {
        return _.fromPairs(Array.from(map));
    }



}