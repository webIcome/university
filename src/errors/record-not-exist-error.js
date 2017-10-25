import AbstractError from "./abstract-error";
import {ErrorCode} from "../constants";
export default class RecordNotExistError extends AbstractError {

    constructor() {
        let errorCode = ErrorCode.RECORD_NOT_EXIST;
        super(errorCode.code, errorCode.msg);
    }
};

