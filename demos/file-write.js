var fs = require("fs");

console.log("准备写入文件");

var data = "写点什么";
fs.writeFile('./data/out3.txt', data, {"encoding": "utf-8"}, function(err){
    if(err) {
        return console.error(err);
    }
    console.log("文件写入成功");
    fs.readFile('./data/out3.txt', function(err, data){
        if(err) {
            return console.error(err);
        }
        console.log("异步读取文件内容：", data.toString());
    });
});