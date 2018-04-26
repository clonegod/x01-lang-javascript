function* gen() {
    var x  = yield 1; // yield返回1， 并从下一次next()调用接收传入的参数值赋值给x.
    console.log("x="+x);
    return "generator exit";
}

var g = gen(); // 获取生成器对象

console.log(g.next()); // 获取yield返回的值

console.log(g.next(10)); // 获取gen函数的返回值