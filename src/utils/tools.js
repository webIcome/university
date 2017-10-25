/**
 * Created by Levi on 2017/2/28.
 */
import uuid from 'uuid';
import md5 from 'md5';
import * as _ from 'lodash';

export default class Tools {
    static getUUID() {
        return _.replace(uuid.v4(), /-/g, '');
    }

    static md5(str) {
        return md5(str);
    }

    static getToken() {
        return this.getUUID();
    }

}