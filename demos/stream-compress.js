var fs = require("fs");

var zlib = require("zlib");

var writeStream = fs.createWriteStream("./data/input.txt.gz");

fs.createReadStream('./data/input.txt')
  .pipe(zlib.createGzip())
  .pipe(writeStream);
  
console.log("Done");