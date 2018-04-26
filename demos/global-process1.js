process.stdout.write("Hello nodejs\n");

console.log("nodejs current version: ", process.version);

process.argv.forEach(function(val, index, array){
    console.log("index=%d, val=%s", index, val);
});

console.log("execPath=", process.execPath);

console.log("platform=", process.platform);