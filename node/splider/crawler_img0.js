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
    console.log(imgData);
  })
}).on('error',function(error){
  console.log(error);
})

function filterData(html){
  var $ = cheerio.load(html);
  var usePart = $('li');
  var imgData = [];

  usePart.each(function(item){
    var item =  $(this);
    console.log(item);
    var imgId = item.find('.img_id').text();
    var imgUrl = item.find('img').attr('src');
    if(imgId != null && imgUrl !=null){
      imgData.push({
        imgTitle:imgId,
        imgUrl:imgUrl
      })
    }
  })
  return imgData;
}
