var http = require('http');
var fs = require('fs');
var request = require("request");

var data = fs.readFileSync('./appID1.txt');
data = data.toString().trim().replace(/\n/g, ",");
var arr = data.split(',');

var errorID = '';
var falseID = '';
var errorReq = '';
var i = 0;
var options = {
	method: 'GET',
	url: 'http://api.3023.com/apple/apple',
	headers: {
		'key': 'b2bf6bd3e675bee21a576faf891c5697'
	}
}

var f = function() {
  if (i < arr.length) {
    options['qs'] = { sn: arr[i] };

    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      body = JSON.parse(body);
      if (body.model) {
        console.log(i + " " + arr[i-1] + " " + body.model);
      } else {
        console.log(i + " " + arr[i-1] + " " + body.message);
        falseID = falseID + i + " " + arr[i-1] + " " + body.message + ' ';
      }
    })
    i++;
  } else {
    fs.writeFile('./falseID.txt', falseID, function(err) {
      if (err) {
        console.log('写文件出错了');
      }
    });
    clearInterval(t);
  }
}
var t = setInterval(f, 500);
