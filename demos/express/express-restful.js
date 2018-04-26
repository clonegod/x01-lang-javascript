var express = require('express');
var app = express();
var fs = require("fs");
var path = require("path");

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Server running at http://%s:%s", host, port)
});


/**
    Create Restful Service.
*/

/**显示用户列表*/
app.get('/listUsers', function (req, res) {
   fs.readFile( path.join(__dirname, "users.json"), 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

//添加的新用户数据
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

/**添加新用户*/
app.get('/addUser', function (req, res) {
   // 读取已存在的数据
   fs.readFile( path.join(__dirname, "users.json"), 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data, null, 2)); // 格式化输出JSON字符串
   });
})


/**获取用户详细信息*/
app.get('/:id', function (req, res) {
   // 首先我们读取已存在的用户
   fs.readFile( path.join(__dirname, "users.json"), 'utf8', function (err, data) {
       data = JSON.parse( data );
       var user = data["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

/**删除用户*/
app.get('/deleteUser/:id', function (req, res) {

   // First read existing users.
   fs.readFile( path.join(__dirname, "users.json"), 'utf8', function (err, data) {
       console.log("delete user id=", req.params.id);
       data = JSON.parse( data );
       delete data["user" + req.params.id];
       
       console.log( data );
       res.end( JSON.stringify(data, null, 2));
   });
})
