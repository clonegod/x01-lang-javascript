console.log("current dir", process.cwd());

console.log("change dir to e:/tmp");
process.chdir("e:/tmp");

console.log("current dir", process.cwd());

console.log("memory usage", process.memoryUsage());