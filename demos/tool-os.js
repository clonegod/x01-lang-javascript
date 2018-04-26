var os = require("os");

// CPU 的字节序
console.log("endianness: ", os.endianness());

console.log("os type: ", os.type());

console.log("platform: ", os.platform());

console.log("total memory: %s bytes", os.totalmem());

console.log("free memory: %s bytes", os.freemem());
