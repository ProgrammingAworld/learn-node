var https = require('https');
var http = require('http');
var cheerio = require('cheerio');
var fs = require('fs');
var URL = 'https://aso100.com/app/keyword/appid/1229539533/country/cn';


https.get(URL, function(res) {
  var html = '';
  res.on('data', function(chunk) {
    html += chunk;
  });

  res.on('end', function() {
    fs.writeFile('aso.html', html, function(err) {
      if (err) {
        console.log(err);
      } else {
      }
    })
  })
}).on('error', function(err) {
  console.log(err + '读取源码失败');
})
