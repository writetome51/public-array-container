import { PublicArrayContainer } from './index.js';


class TestClass extends PublicArrayContainer {
    constructor(arr) {
        super(arr);
    }
    logClassNameAndReturnThis() {
        return this._returnThis_after(console.log(this.className));
    }
}

let testObject = new TestClass(['b', 'c', 'd']);
let instance = testObject.logClassNameAndReturnThis();

// should log 'TestClass' to console.
if (instance.className && instance.className === 'TestClass') console.log('test 1 passed');
else console.log('test 1 FAILED');


console.log(instance.data);

