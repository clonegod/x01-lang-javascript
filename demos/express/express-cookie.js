var express      = require('express');

var cookieParser = require('cookie-parser');
 
var app = express();
app.use(cookieParser());

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Server running at http://%s:%s", host, port)
 
});

app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies);
  
  res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
  
  res.end(JSON.stringify(req.cookies));
});
