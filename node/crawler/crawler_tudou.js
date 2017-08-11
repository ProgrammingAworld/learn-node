var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var URL = 'http://www.tudou.com/';


function filterHtml(html) {
  var imgList = [];
  var $ = cheerio.load(html);
  var videoLis = $('.td-row');

  videoLis.each(function(index,item) {
    var videoItem = $(this);
    var cols = videoItem.find('.td-col');
    cols.each(function(index, item) {
      console.log(item);
      var imgItem = $(this);
      var imgSrc = imgItem.find('img').attr('src');
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
    fs.writeFile('tudou.html', HTML, function(err) {});
    console.log(result);
    // console.log(result.length);
  })
})
