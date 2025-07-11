//console.log(arguments);
//console.log(require('modules').wrapper);

//module.exports
const C = require('./test-module-1'); // for class  - using a uppercase
const calc1 = new C();
console.log(calc1.add(2, 5));

//exports
const cacl2 = require('./test-module-2'); // calc2 - exports Object
console.log(cacl2.divine(2, 5));
