var http = require('http');
var fs = require('fs');
var request = require("request");
var rp = require('request-promise');

var data = fs.readFileSync('./appID1.txt');

var arr = data.toString().split(',');
var num = 1;
var errorID = '';
var falseID = '';
var errorReq = '';

arr.map(function(item, index) {
    let qs = {
      sn: item
    }
    var options = {
    	method: 'GET',
    	url: 'http://api.3023.com/apple/apple',
    	qs: qs,
    	headers: {
    		'key': 'b2bf6bd3e675bee21a576faf891c5697'
    	}
    };

    rp(options)
      .then(function(res) {
        res = JSON.parse(res);
        num ++;
        if (res.sn) {
          // console.log(res.sn);
        } else {
          console.log('出错了:' + item);
        }
      }).catch(function(err) {
        console.log(err + " " +item);
      }).finally(function() {
        console.log(num + " " + arr.length + ' ' + item );
      })
})
