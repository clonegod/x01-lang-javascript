var fs = require("fs");

var readStream = fs.createReadStream("./data/out.txt");
readerStream.setEncoding('UTF8');

var writeStream = fs.createWriteStream("./data/out2.txt");

readStream.pipe(writeStream);

console.log("Done");