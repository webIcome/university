import BaseRest from "../base-rest.test";
import env from '../env.test';

export default class ApiRest extends BaseRest {

    static getUri() {
        return env.apiUrl;
    }

    static customHeaders() {
        let headers = {};
        headers['X-XSRF-TOKEN'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ4LXN0dWRlbnQtaWQiOjMsImV4cGlyZXNfaW4iOjE1MDg3NTI4Mjc4NzZ9.Za6SMRJtdzglAlbcYoHNB9JOtGyo0HC7RJdDCaZxFmQ";
        headers['X-REGION-CODE'] = '59500';
        headers['Accept-Encoding'] = 'gzip';
        return headers;
    }

}
