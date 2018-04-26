function sayHello() {
    console.log("Hello nodejs");
}

var t = setInterval(sayHello, 1000);

setTimeout(function(){
    clearInterval(t);
    console.log("clearInterval execute");
}, 5000);

console.log("Done");