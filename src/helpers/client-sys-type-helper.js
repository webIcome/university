import {CoreConstant} from "../constants";

const TYPE_CLIENT_SYS = new Map([
    [CoreConstant.CLIENT_TYPE_WX, 1],
    [CoreConstant.CLIENT_TYPE_APP, 2],
]);

export default class ClientSysTypeHelper {

    static getCode(name) {
        return TYPE_CLIENT_SYS.get(name);
    }

    static getName(code) {
        for (const [key, value] of TYPE_CLIENT_SYS.entries()) {
            if (value == code) {
                return key;
            }
        }
    }

}
