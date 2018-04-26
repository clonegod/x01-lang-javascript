var fs = require("fs");

console.log("准备打开文件./data/input.txt");

fs.open('./data/input.txt', 'r+', function(err, fd){
    if(err) {
        return console.error(err);
    }
    console.log("文件打开成功");
    console.log("fd=", fd);
});
