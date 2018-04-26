'use strict';

// 1. 声明一个generator
function* idMaker(i) {
  yield i;
  yield* anotherIdMaker(i + 1); // 调用另一个generator
  yield i + 2;
}

// 1. 声明另一个generator
function* anotherIdMaker(i){
  for(let p = i; true; p+=2) {
      if(p >= 10) break;
      yield p;
  }
}

// 2. 获取generator对象
var g = idMaker(1);

// 3. 从generator逐个获取结果
for(let i=0; i<100; i++) {
    let obj = g.next();
    if(obj.done) {
        console.log("No more id can get, generator is end!");
        break;
    } else {
        console.log("id=%d, done=%s", obj.value, obj.done);
    }
}