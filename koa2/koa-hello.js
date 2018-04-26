// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

/** 
 * [async function] 
 * 每个async函数称为middleware，这些middleware以链表的形式组织起来运行。按书写顺序依次执行，因此书写middleware的顺序很关键。
 */
app.use(async (ctx, next) => {
    console.log("async1");
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

/** 
 * [async function] 
 */
app.use(async (ctx, next) => {
    console.log("async2");
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

/**
 * [async function]
 */
app.use(async (ctx, next) => {
    if (await checkUserPermission(ctx)) {
        await next(); // 检查权限通过，则调用下一个middleware
    } else {
        ctx.response.status = 403; // 否则返回403 Forbidden
    }
});

/** 
 * [async function] 对于任何请求，app将调用该异步函数处理请求 
 */
app.use(async (ctx, next) => {
    console.log("async3");
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});


// =======>启动http服务器，在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');


// 模拟检查用户权限的异步操作。随机返回是否具有访问权限。
async function checkUserPermission() {
    await timeout(1000);
    let rand = Math.random();
    console.log(`rand number = ${rand}`);
    return rand > 0.8;
}

// 模拟执行IO操作所耗费的时间
async function timeout(ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}