
import env from '../env.test';
import BaseRest from "../base-rest.test";

export default class ControllerRest extends BaseRest {

    static getUri() {
        return env.controllerUrl;
    }

    static customHeaders() {
        let headers = {};
        headers["Accept-Encoding"] = "gzip";
        headers["Origin"] = "http://localhost:9000";
        return headers;
    }

};
