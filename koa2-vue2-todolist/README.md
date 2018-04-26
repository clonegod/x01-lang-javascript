# koa2-vue2-todolist

> A Vue.js project

### nodejs: 提供http服务
### npm: nodejs包管理器
### webpack: 打包工具
### vscode: 程序编辑工具/IDE
### JWT: json web token
### Sequelize: Mysql database connector


## 本demo功能描述：
1. 使用Koa2提供后台API接口服务;
2. 使用Vue构建前端页面---MVVM;
3. 实现登录功能，使用JWT进行客户端认证;
4. 后端使用Sequelize实现了对MYSQL进行CRUD操作;

## 参考
https://molunerfinn.com/Vue+Koa/

```
# 启动koa2后台服务
node app.js

# 启动webpack提供基于vue的前台页面服务
npm run dev
```

----------
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).