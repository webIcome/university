import AbstractError from "./abstract-error";
import {ErrorCode} from "../constants";
export default class RecordExistError extends AbstractError {

    constructor() {
        let errorCode = ErrorCode.RECORD_EXIST;
        super(errorCode.code, errorCode.msg);
    }
};

