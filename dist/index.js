import { errorIfNotArray } from 'error-if-not-array';
import { BaseClass } from '@writetome51/base-class';
export class PublicArrayContainer extends BaseClass {
    constructor(__data = []) {
        super();
        this.__data = __data;
        errorIfNotArray(this.__data);
    }
    get data() {
        return this.__data;
    }
    set data(value) {
        errorIfNotArray(value);
        this.__data = value;
    }
}
