var fs = require("fs");

var data = "测试写入数据到文件";

var writeStream = fs.createWriteStream("./data/out.txt");

writeStream.write(data, "utf-8");

writeStream.end();

writeStream.on("finish", function(){
    console.log("Finish write data to file");
});
writeStream.on("error", function(err){
    console.log(err.stack);
});

console.log("Done");