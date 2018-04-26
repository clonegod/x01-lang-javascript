var fs = require("fs");

fs.stat('./data/input.txt', function(err, stat){
    if(err) {
        return console.error(err);
    }
    
    console.log("读取文件信息成功");
    console.log(stat);
    
    // 检测文件类型
    console.log('is file:', stat.isFile());
    console.log('is directory:', stat.isDirectory());
});
