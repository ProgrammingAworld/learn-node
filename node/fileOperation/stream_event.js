var fs = require('fs');

var readStream = fs.createReadStream('./readAndWrite.js');

readStream
  .on('data',function(chunk){
    console.log('正在读取数据');
    console.log(chunk);
    console.log('\n');
    console.log(chunk.toString());
  })
  .on('readable',function(){
    console.log('文件可读');
  })
  .on('end',function(){
    console.log('读取文件结束');
  })
  .on('close',function(){
    console.log('文件关闭');
  })
  .on('error',function(e){
    console.log(e);
  })
