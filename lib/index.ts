import { IPublicDataContainer } from 'public-data-container-interface/IPublicDataContainer';
import { errorIfNotArray } from 'error-if-not-array';
import { BaseClass } from '@writetome51/base-class';


export abstract class PublicArrayContainer extends BaseClass implements IPublicDataContainer<any[]> {


	constructor(private _data: any[]) {
		super();
		errorIfNotArray(this._data);
	}


	get data() {
		return this._data;
	}


	set data(value) {
		errorIfNotArray(value);
		this._data = value;
	}


}
