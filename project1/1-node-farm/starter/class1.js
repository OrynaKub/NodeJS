const fs = require('fs');

//Blocking , synchronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// sync takes two arguments, 1 - reading file, 2 where it will be show
console.log(textIn);

const textOut = 'This is what we know about the avocade : ${textIn}. \nCreated on ${Date.now()} ';

fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');
