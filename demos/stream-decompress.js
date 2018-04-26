var fs = require("fs");

var zlib = require("zlib");

var writeStream = fs.createWriteStream("./data/input2.txt");

fs.createReadStream("./data/input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(writeStream);
  
console.log("Done");