var express = require('express');
var app = express();

// 中间件 express.static 设置静态文件
app.use(express.static('public'));
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Server running at http://%s:%s", host, port)
 
})