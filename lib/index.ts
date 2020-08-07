import { BaseClass } from '@writetome51/base-class';
import { errorIfNotArray } from 'error-if-not-array';


export abstract class PublicArrayContainer extends BaseClass {


	constructor(private __data = []) {
		super();
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
