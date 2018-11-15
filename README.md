To include in your project:

import { PublicArrayContainer } from '@writetome51/public-array-container';

PublicArrayContainer is a TypeScript abstract class that is a dependency of the  
PublicArray class  ( package:  @writetome51/public-array ).

Its constructor requires an array argument.  
It has no methods.  
It has 1 property:

data : any[] // read-writable


Usage Example:

    export class PublicArrayContent extends PublicArrayContainer {

        constructor(data = []) {
		    super(data);
	    }

        // ... more code ...
	
    }
    
