function sayHello() {
    console.log("Hello nodejs");
}

var t = setTimeout(sayHello, 2000);

clearTimeout(t);
console.log("sayHello never have chance to execute");
console.log("Over");