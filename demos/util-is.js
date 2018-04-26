var util = require("util");

console.log( util.isArray(new Array()) ); // true
console.log( util.isArray({}) ); // false
console.log( util.isArray([]) ); // true

console.log( util.isRegExp(/^\d17[xX]$/) ); // true
console.log( util.isRegExp(new RegExp("^1\d{10}$")) ); //true
console.log( util.isRegExp("^\w{6,18}$") ); // false

console.log( util.isDate(new Date()) ); // true
console.log( util.isDate(Date()) ); // false
console.log( util.isDate({}) ); // false

console.log( util.isError(new Error()) ); // true
console.log( util.isError(new TypeError()) ); // true
console.log( util.isError({"name": "Error", "message": "An Error"}) ); // false
