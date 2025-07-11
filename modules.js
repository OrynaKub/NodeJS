//console.log(arguments);
//console.log(require('modules').wrapper);

const C = require('./test-module-1'); // for class  - using a uppercase
const calc1 = new C();
console.log(calc1.add(2, 5));
