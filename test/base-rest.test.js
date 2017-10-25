
import unirest from 'unirest';

export default class BaseRest {

    static get(path, headers, body, callback) {
        return unirest.get(this.getUri() + path, headers, body, callback).headers(this.customHeaders());
    }

    static post(path, headers, body, callback) {
        return unirest.post(this.getUri() + path, headers, body, callback).headers(this.customHeaders());
    }

    static put(path, headers, body, callback) {
        return unirest.put(this.getUri() + path, headers, body, callback).headers(this.customHeaders());
    }

    static delete(path, headers, body, callback) {
        return unirest.delete(this.getUri() + path, headers, body, callback).headers(this.customHeaders());
    }

    static customHeaders() {}

    static getUri() {}

}