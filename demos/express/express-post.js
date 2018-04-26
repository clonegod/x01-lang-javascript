var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Server running at http://%s:%s", host, port)
 
});

app.get('/index-post.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index-post.html" );
});

app.post('/process_post', urlencodedParser, function (req, res) {
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   
   // 输出 JSON 格式
   res.end(JSON.stringify(response));
})