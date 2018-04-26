var fs = require("fs");

fs.readFile("./data/input.txt", "utf-8", function(err, data){
    if(err){
        console.error(err);
        return;
    }
    console.log("异步读取文件：", data);
});

var data = fs.readFileSync("./data/input.txt", "utf-8");
console.log("同步读取文件：", data);

console.log("Over"); 