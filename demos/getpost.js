var http = require("http");
var url = require("url");
var querystring = require('querystring');
var util = require("util");

function startServer() {
    http.createServer(function(req, res){
        var method = req.method.toLowerCase();
        var pathname = url.parse(req.url).pathname;
        
        if(pathname=="/index" && method=="get") {
            handleGet(req, res);
        } else if(pathname=="/upload") {
            handlePost(req, res);
        } else {
            console.log("Invalid request: %s", req.url);
            //res.write("Invalid request: " + req.url);
            //res.end();
        }
    }).listen(8081);
    
    console.log("Server start at http://localhost:8081/");
}

startServer();



// http://localhost:8081/index?name=alice&url=www.clonegod.org
function handleGet(req, res) {
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.write("\n");
    res.end(util.inspect(url.parse(req.url, true)));
}

var postHTML =
    '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+ 'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '网站名： <input name="name"></input><br>' +
    '网站 URL： <input name="url"></input><br>' +
    '<input type="submit" value="Submit" />'+
    '</form>'+
    '</body>'+
    '</html>';

function handlePost(req, res) {
    // 定义了一个post变量，用于暂存请求体的信息
    var body = '';     
 
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function(chunk){    
        body += chunk;
    });
 
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function(){    
        body = querystring.parse(body);
        console.log(body);
        if(body.name && body.url) { // 输出提交的数据
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}