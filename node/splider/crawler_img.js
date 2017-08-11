var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.quanjing.com/search.aspx?q=%E7%BE%8E%E5%A5%B3||1|100|1|2||||#美女||1|100|1|2||||';

http.get(url,function(res){
  var html = '';
  res.on('data',function(data){
    html += data;
  });
  res.on('end',function(){
    var imgData = filterData(html);
    // console.log(imgData);
  })
}).on('error',function(error){
  console.log(error);
})

function filterData(html){
  var $ = cheerio.load(html);
  var usePart = $('#gallery-list').find('li').length;
  console.log(usePart);
}
