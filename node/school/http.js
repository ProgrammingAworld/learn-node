var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write('<H1>hello world!</H1>');
  res.end();

}).listen(2017);
console.log('Server running at http://127.0.0.1:2017');
