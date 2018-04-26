var path = require("path");

// 格式化路径
console.log("normalization: ", path.normalize('/test1/.//2slashes/1slash/..'));

// 连接路径
console.log("join path: ", path.join('/test', 'test1', 'xxx', '..'));

// 转换为绝对路径
console.log("resolve: ", path.resolve('main.js'));

// 路径中文件的后缀名
console.log("suffix: ", path.extname('main.js'));

