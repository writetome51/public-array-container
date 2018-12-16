import { IPublicDataContainer } from 'public-data-container-interface/IPublicDataContainer';
import { BaseClass } from '@writetome51/base-class';


export declare abstract class PublicArrayContainer extends BaseClass implements IPublicDataContainer<any[]> {

	data: any[];

	private _data;


	constructor(_data: any[]);


}
