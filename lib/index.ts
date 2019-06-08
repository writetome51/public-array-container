import { IPublicDataContainer } from 'public-data-container-interface/IPublicDataContainer';
import { errorIfNotArray } from 'error-if-not-array';
import { BaseClass } from '@writetome51/base-class';


export abstract class PublicArrayContainer extends BaseClass implements IPublicDataContainer<any[]> {


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
