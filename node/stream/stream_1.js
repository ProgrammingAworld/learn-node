var http = require('http');
var fs = require('fs');
var request = require('request');

http.createServer(function(req,res){
  request('http://dl.bizhi.sogou.com/images/2012/03/14/124196.jpg').pipe(res);
}).listen(8090)
