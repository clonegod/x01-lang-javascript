var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Server running at http://%s:%s", host, port)
 
});


app.get('/index-get.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index-get.html" );
});

app.get('/process_get', function (req, res) {
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   // 输出 JSON 格式
   res.end(JSON.stringify(response));
});