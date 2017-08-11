var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html){
  var $ = cheerio.load(html);
  var chapters = $('.chapter');
  var courseData = [];

  chapters.each(function(item){
    var chapter = $(this);
    var chapterTitle = chapter.find('strong').text();
    var videos = chapter.find('.video').children('li');
    var chapterData = {
      chapterTitle:chapterTitle,
      videos:[]
    }
    videos.each(function(item){
      var video = $(this).find('.J-media-item');
      var videoTitle = video.text();
      var id = video.attr('href').split('video/')[1];
      chapterData.videos.push({
        title:videoTitle,
        id:id
      })
    })
    courseData.push(chapterData)
  })
  return courseData
}

http.get(url,function(res){
  var html = '';

  res.on('data',function(data){
    html += data;
  });

  res.on('end',function(){
    var datas = filterChapters(html);
    console.log(datas);
  })
}).on('error',function(error){
  console.log(error);
})
