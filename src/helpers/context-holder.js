import ContinuationLocalStorage from "continuation-local-storage";
import Session from "../models/session";

const SESSION_KEY = "session_key";
const SYS_CONTEXT = "sys_context";
const createNamespace = ContinuationLocalStorage.createNamespace(SYS_CONTEXT);
const getNamespace = ContinuationLocalStorage.getNamespace(SYS_CONTEXT);

export default class ContextHolder {

    static setSession(session) {
        return new Promise((resolve, reject) => {
            let context = createNamespace;
            context.set(SESSION_KEY, session);
            resolve();
        });
    }

    static getSession() {
        return new Promise((resolve, reject) => {
            let context = getNamespace;
            if (!context || !context.get(SESSION_KEY)) {
                this.setSession(new Session()).then((data) => {
                    context = getNamespace;
                    resolve(context.get(SESSION_KEY));
                });
            } else {
                resolve(context.get(SESSION_KEY));
            }
        });
    }

    static getCreateNamespace(){
        return createNamespace;
    }
}
