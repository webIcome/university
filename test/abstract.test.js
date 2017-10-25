
class Abstract {
    static foo() {
        if (this === Abstract) {
            throw TypeError('Can not call static abstract method foo.');
        } else if (this.foo === Abstract.foo) {
            throw TypeError('please implement static abstract method foo.');
        } else {
            throw new TypeError('Do not call static abstract method foo from child.');
        }
    }

    constructor() {
        if (this.constructor === Abstract) {
            throw TypeError('Can not contruct abstract class.');
        }

        if (this.foo === Abstract.prototype.foo) {
            throw new TypeError('Please implement abstract method foo.');
        }
    }

    foo() {
        throw new TypeError('Do not call abstract method foo from child.');
    }
}

export default Abstract;

class My extends Abstract {
    /*    static foo () {
     super.foo();
     }*/

    foo() {
        super.foo();
    }
}

let my = new My();
my.foo();
