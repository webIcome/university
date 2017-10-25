import AbstractError from "./abstract-error";
import {ErrorCode} from "../constants";
export default class VerifyFailError extends AbstractError {

    constructor() {
        let errorCode = ErrorCode.VERIFY_FAIL;
        super(errorCode.code, errorCode.msg);
    }
};

