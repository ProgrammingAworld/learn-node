var fs = require('fs');

var readStream = fs.createReadStream('./node.jpg');
var writeStream = fs.createWriteStream('node_copy_stream.jpg');

// 在读文件的同时在写文件，为了防止i/o操作不能同步完成
//加一个判断如果缓存中的文件没有写完那么等到写完之后在读取之后的数据
readStream.on('data',function(chunk){
  if (writeStream.write(chunk) === false ) {
    readStream.pause();// 读文件流的暂停事件
  }
})

// 如果文件读取完毕，通知写文件的流完毕
readStream.on('end',function(){
  writeStream.end();
})

// 如果写文件的流完成，那么触发读文件的流继续读文件
// drain 写文件流的完成事件
writeStream.on('drain',function(){
  readStream.resume();// 读文件流的重启事件
})
