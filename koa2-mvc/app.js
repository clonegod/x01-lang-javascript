const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller'); // 绑定路由

const templating = require('./templating'); // 模板引擎

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

// log request URL: 统计响应每个请求耗费的时间
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// static file support: 返回静态资源文件
if (! isProduction) {
    let staticFiles = require('./static-files'); // 静态资源文件
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// parse request body: 解析POST请求的body内容
app.use(bodyParser());

// add nunjucks as view: 模板引擎-将model中的数据填充到view
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controller: 最后绑定路由middleware
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');