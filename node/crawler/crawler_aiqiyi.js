var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var URL = 'http://www.iqiyi.com/';


function filterHtml(html) {
  var imgList = [];
  var $ = cheerio.load(html);
  var videoLis = $('.site-piclist');

  videoLis.each(function(item) {
    var videoItem = $(this);
    var imgs = videoItem.find('img');
    imgs.each(function(item) {
      var imgItem = $(this);
      var imgSrc = imgItem.attr('src');
      imgList.push(imgSrc);
    })
  })
  return imgList;
}

http.get(URL, function(res) {
  var HTML = '';
  res.on('data', function(chunk) {
    HTML += chunk;
  });

  res.on('end', function() {
    var result = filterHtml(HTML);
    fs.writeFile('aiqiyi.html', HTML, function(err) {});
    console.log(result);
    console.log(result.length);
  })
})
