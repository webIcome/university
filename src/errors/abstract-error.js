export default class AbstractError extends Error {
    constructor(errcode, errmsg) {
        super("[" + errcode + "]:" + errmsg);
        this.errcode = errcode;
        this.errmsg = errmsg || 'Error';
        this.name = this.__proto__.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}