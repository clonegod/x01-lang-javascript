// 1. 定义异步操作的具体行为
let promise = new Promise((resolve, reject) => {
    // 执行异步操作，当有操作结束时返回结果。1. 成功，调用resolve函数； 2. 发生错误，则调用reject函数；
    var rand = Math.random();
    console.log("rand=", rand);
    if(rand >= 0.6) {
        // 成功时，调用resolve函数处理结果。
        resolve("good: " + rand);
    } else if(rand >= 0.3) {
        // reject等效于发生异常。非异常导致的reject的返回值不会被忽略。
        reject("reject ???:" + rand);
    } else {
        // 如果在executor函数中抛出一个错误，那么该promise 将被拒绝。executor的返回值被忽略。绑定的catch回调函数将被执行。
        throw new Error("bad: " + rand);
    }
});

// 2. 创建异步操作成功时的回调函数
function onFulfilled (response) {
    console.log("->Fulfilled! value=%s\n", response);
    throw new Error("Error happen in fulfilled will be catched by next catch clause");
}

// 3. 创建异步操作失败（发生异常）时的回调函数
function onRejectedOrError (response) {
    console.log("-->Rejected or Error! value=%s\n", response);
}

// 4. 绑定成功时的回调函数
// 5. 捕获所有可能发生的异常
promise.then(onFulfilled)
       .catch( error => console.error("--->Exception:\n", error));
