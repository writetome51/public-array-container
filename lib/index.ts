import { IPublicDataContainer } from 'public-data-container-interface/IPublicDataContainer';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { BatchGetterSetter } from 'batch-getter-setter/BatchGetterSetter';


export abstract class PublicArrayContainer extends BatchGetterSetter implements IPublicDataContainer<any[]> {


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
