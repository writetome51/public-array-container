# PublicArrayContainer

A TypeScript/JavaScript abstract class meant to be extended by array-manipulating  
classes.

## Usage Example
```ts
export class PublicArrayContent extends PublicArrayContainer {

    constructor(data = []) {
        super(data); 
    }

    // ... more code ...

}
```

## Constructor
```ts
constructor(data? = [])  // 'data' is assigned to this.data .
```

## Properties
```ts
data : any[]  
    // The actual array. Whenever assigned a value, its type is validated.
    
className : string (read-only)
```

## Methods
<details>
<summary>view methods</summary>

```ts
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

protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>

## Inheritance Chain

PublicArrayContainer<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)

## Installation
```
npm i @writetome51/public-array-container
```

## Loading
```ts
// if using Typescript:
import { PublicArrayContainer } from '@writetome51/public-array-container';
// if using ES5 Javascript:
var PublicArrayContainer = 
    require('@writetome51/public-array-container').PublicArrayContainer;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
