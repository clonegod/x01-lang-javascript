var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  
  // Fetch模块返回的是一个 Promise 对象
  var pageResult = yield fetch(url); // 返回结果，并获取调用方传入的值。
  
  console.log(pageResult);
  
  return "generator exit";
}

var g = gen(); // generator对象
var promise = g.next().value; // fetch返回的实际是一个promise

promise.then(function(data){
  return data.json(); 
}).then(function(data){
    // 获取到最终返回的页面结果
    console.log("=======%s=====\n",data.avatar_url);
    // 将结果传递给generator。 并获取下一个结果（可能是下一个yield返回，也可能是函数return）
    var result = g.next(data);
    console.log("\nLast result=%s", result.value);
}).catch(error => {
    console.log(error);
});
