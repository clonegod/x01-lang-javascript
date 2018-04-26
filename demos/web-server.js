var http = require("http");
var fs = require("fs");
var url = require("url");


// 创建http服务器
http.createServer(function(request, response){
    // 解析请求
    var pathname = url.parse(request.url).pathname;
    console.log("Request for %s received.", pathname);
    
    // 读取文件，返回给客户端
    console.log("pathname=", pathname)
    fs.readFile(pathname.substr(1), "utf-8", function(err, data){
        if(err) {
            console.error(err);
            response.writeHead(404, {"Content-Type": "text/html"});
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data.toString());
        }
        // 发送响应数据
        response.end();
    });
}).listen(8081);

console.log("Server Running at http://localhost:8081/");
