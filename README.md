# PublicArrayContainer

A TypeScript/JavaScript abstract class meant to be extended by array-manipulating  
classes.

## Usage Example

    export class PublicArrayContent extends PublicArrayContainer {

        constructor(data = []) {
            super(data);
	    }

        // ... more code ...
	
    }
    

## Constructor
```
constructor(data: any[]) // 'data' is the array it will contain.
```

## Properties

    data : any[] (read-writable) // this is the actual array.
    
    className : string (read-only)

## Methods
```
protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
    /*********************
    Use this method when you have a bunch of properties that need getter and/or 
    setter functions that all do the same thing. You pass in an array of string 
    names of those properties, and the method attaches the same getter and/or 
    setter function to each property.
    IGetterSetterConfiguration is this object:
    {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.  The setter function must take one 
	    // parameter and return void.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.  The getter function must return something.
    }
    *********************/ 
	   
	   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function // takes the result returned by method as an argument.
) : this
```


## Inheritance Chain

PublicArrayContainer<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)

## Installation

You must have npm installed first. Then, in the command line:

    npm install @writetome51/public-array-container


## Loading

    // if using Typescript:
    import { PublicArrayContainer } from '@writetome51/public-array-container';
    // if using ES5 Javascript:
    var PublicArrayContainer = 
        require('@writetome51/public-array-container').PublicArrayContainer;


## License
[MIT](https://choosealicense.com/licenses/mit/)