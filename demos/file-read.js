var fs = require("fs");

var buf = new Buffer(1024);

console.log("准备打开已存在文件");
fs.open("./data/input.txt", 'r+', function(err, fd){
    if(err) {
        return console.log(err);
    }
    console.log("文件打开成功");
    console.log("准备读取文件内容");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytesRead){
        if(err) {
            return console.error(err);
        }
        console.log(bytesRead + " 字节被读取");
        
        if(bytesRead > 0) {
            console.log(buf.slice(0, bytesRead).toString());
        }
    });
    
});