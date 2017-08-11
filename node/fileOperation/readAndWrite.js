var fs = require('fs');

fs.readFile('node.jpg',function(err,buf){
  fs.writeFile('node_copy.jpg',buf,function(err){
    if(err) console.log(err);
  });
  fs.writeFile('123.txt','234.js','utf8',function(err){
    if(err) console.log(err);
  })
})
