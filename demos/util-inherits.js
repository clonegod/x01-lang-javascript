var util = require("util");

function Base() {
    this.name = 'base';
    this.base = 2000;
    this.sayHello = function() {
        console.log('Hello ', this.name);
    }
}

Base.prototype.showName = function() {
    console.log('Your name: ', this.name);
}

function Sub() {
    this.name = "sub";
}
// Only extends properties or method from prototype
util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

console.log("\n");

var objSub = new Sub();
objSub.showName();
try{
    objSub.sayHello();
} catch(e) {
    console.error("Sub don't extend sayHello from Base", e);
}
console.log(objSub);
