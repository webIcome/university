import AbstractError from "./abstract-error";

export default class BusinessError extends AbstractError {
    constructor(code, msg) {
        super(code, msg);
    }
}
