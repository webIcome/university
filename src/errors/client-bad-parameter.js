import AbstractError from "./abstract-error";
import {ErrorCode} from "../constants";
export default class ClientBadParameterError extends AbstractError {

    constructor() {
        let errorCode = ErrorCode.CLIENT_BAD_PARAMETER;
        super(errorCode.code, errorCode.msg);
    }
};

