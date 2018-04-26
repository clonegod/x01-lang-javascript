var http = require('http');

var options = {
    protocol: 'http:',
    host: 'localhost', // fiddler代理服务器的IP
    port: 8081, // fiddler代理服务器的端口
    method: 'GET',
    path: 'http://localhost:8081/data/index.html' // 目标网址
};

var callback = function(res) {
    console.log('STATUS: ', res.statusCode);
    console.log('HEADERS: ', JSON.stringify(res.headers));
    var body = '';
    res.setEncoding('utf8');
    res.on('data', (data) => { body += data})
    res.on('end', () => {
        console.log('数据接收完毕');
        console.log(body);
    });
}

var req = http.request(options, callback);
req.on('error', (e) => {
    console.log('请求遇到问题:', e.message );
});
    
// 发送请求结束标记
req.end();