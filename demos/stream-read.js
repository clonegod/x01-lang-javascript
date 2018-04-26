var fs = require("fs");

var data = "";

var readStream = fs.createReadStream("./data/input.txt");

readStream.setEncoding("utf-8");

readStream.on("data", function(chunk){
    data += chunk;
});
readStream.on("end", function(){
    console.log("read data from file:", data);
});
readStream.on("error", function(err){
    console.log("error occur:\n", err.stack);
});

console.log("Over");