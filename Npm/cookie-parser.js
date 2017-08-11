var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res) {
  console.log('Cookie:', req.cookies);
}).listen(8080)
