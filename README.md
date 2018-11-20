To include in your project:

import { PublicArrayContainer } from '@writetome51/public-array-container';

PublicArrayContainer is a TypeScript abstract class meant to be extended by array-manipulating classes.

Its constructor requires an array argument.  
It has no methods.  
It has 1 property:

    data : any[] // read-writable (this contains the actual array)


Usage Example:

    export class PublicArrayContent extends PublicArrayContainer {

        constructor(data = []) {
		    super(data);
	    }

        // ... more code ...
	
    }
    
