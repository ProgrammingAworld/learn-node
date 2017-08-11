var request = require('request');
var url = 'https://www.baidu.com/';

request.get({ url }, function(err, res, body) {
  if (err) {
    return console.log(err);
  }
  console.log(body);
})
























// var fs = require('fs');

// var readStream = fs.createReadStream('./appID.csv');
// var writeStream = fs.createWriteStream('./appID_copy.csv');

// readStream.on('data', function(chunk) {
//   if (writeStream.write(chunk) == false) {
//     readStream.pause();
//   }
// })
// writeStream.on('drain', function() {
//   readStream.resume();
// })
//
// readStream.on('end', function() {
//   writeStream.end();
//   console.log('文件读写完毕');
// })
