const Koa = require('koa')
  , koa = require('koa-router')()
  , json = require('koa-json')
  , logger = require('koa-logger')
  , auth = require('./server/routes/auth.js')
  , api = require('./server/routes/api.js')
  , jwt = require('koa-jwt')
  , path =require('path')
  , serve = require('koa-static')
  , historyApiFallback = require('koa2-history-api-fallback');

const app = new Koa();

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(async function(ctx, next){
  let start = new Date;
  await next();
  let ms = new Date - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

app.use(async function(ctx, next){  //  如果JWT验证失败，返回验证失败信息
  try {
    await next();
  } catch (err) {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = {
        success: false,
        token: null,
        info: 'Protected resource, use Authorization header to get access'
      };
    } else {
      throw err;
    }
  }
});

app.on('error', function(err, ctx){
  console.log('server error', err);
});


koa.use('/auth', auth.routes()); // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
koa.use("/api",jwt({secret: 'vue-koa-demo'}),api.routes()) // 所有走/api/打头的请求都需要经过jwt验证。

app.use(koa.routes()); // 将路由规则挂载到Koa上。

// 以下两个middleware需要放置到其它中间件的后面
// 1. 刷新页面，浏览器将会去服务端访问vue的页面路由，而服务端并没有配置这个地址的路由会导致404错误。使用historyApiFallback可解决此问题。
app.use(historyApiFallback());

// 2.将webpack打包好的项目目录作为Koa静态文件服务的目录。即静态资源用Koa托管。
app.use(serve(path.resolve('dist'))); 

app.listen(8889,() => {
  console.log('Koa is listening in 8889');
});

module.exports = app;