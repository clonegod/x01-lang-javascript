var fs = require("fs");

var buf = new Buffer(1024);

console.log("准备打开文件");
fs.open("./data/input.txt", 'r+', function(err, fd){
    if(err) {
        return console.error(err);
    }
    console.log("打开文件成功");
    console.log("准备读取文件内容");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytesRead){
        if(err) {
            console.log(err);
        }
        
        // 输出成功读取的字节
        if( bytesRead> 0) {
            console.log(buf.slice(0, bytesRead).toString());
        }
        
        // 关闭文件
        fs.close(fd, function(err){
            if(err) {
                console.log(err);
            }
            console.log("关闭文件成功");
        });
    });
});