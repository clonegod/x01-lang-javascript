var http = require("http");
var url = require("url");

function startServer() {
    http.createServer(function(request, response){
        console.log("Receive request, request.url=" + request.url);
        
        // 根据pathname将请求分发到对应的处理器handler进行处理---即为路由的作用。
        route(request, response);
        
    }).listen(8081);
    console.log("Server has started, listening on http://localhost:8081/");
}

// 启动服务器
startServer();


/**
以下是路由功能：负责根据请求的PATH分发到不同的handler上进行处理。
*/
function route(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("About to route a request for " + pathname);
    var body = "";
    if(pathname=="/index.html") {
      body = handleIndex(request, response);
    } else {
      body = handleOther(request, response);
    }
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    response.write(body);
    response.end();
}

function handleIndex(request, response) {
    return "欢迎访问首页";
}

function handleOther(request, response) {
    return "其它页面的内容";
}



