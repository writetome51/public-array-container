import { IPublicDataContainer } from 'public-data-container-interface/IPublicDataContainer';
import { BatchGetterSetter } from 'batch-getter-setter/BatchGetterSetter';
export declare abstract class PublicArrayContainer extends BatchGetterSetter implements IPublicDataContainer<any[]> {
    private _data;
    constructor(_data: any[]);
    data: any[];
}
