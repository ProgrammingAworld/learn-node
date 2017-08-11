var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
  'content': '让我们一起期待下一期的课程',
  'cid':'8837'
});

var options = {
  hostname: 'www.imooc.com',
  port: 80,
  path: '/course/document',
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'PHPSESSID=e6qko72o64vnharmv407n8jja1; imooc_uuid=c5ace1bf-29e2-447a-8cd1-2c54be337aca; imooc_isnew_ct=1494900046; loginstate=1; apsid=NkOWZmMTU2ODZkMDA1NmQyNTM0NDU1YzkyYzc0OGEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjk2NDc2NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxNDc3MTgxNTkzQHFxLmNvbQAAAAAAAAAAAAAAAAAAADdmZjBiMGFiNTUwN2MwMmNlZGYzOTBhMTZmM2Y0ZWE1vmEaWb5hGlk%3DZj; last_login_username=1477181593%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1494900048; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1495440460; imooc_isnew=2; cvde=591a5d4e65db7-258',
    'Host': 'www.imooc.com',
    'Origin': 'http://www.imooc.com',
    'Referer': 'http://www.imooc.com/video/8837',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36X-Requested-With:XMLHttpRequest'
  }
}

var req = http.request(options, function(res){
  res.on('data', function(chunk){
    console.log(Buffer.isBuffer(chunk));
    console.log(typeof chunk);
  });

  res.on('end', function(){
    console.log('评论发布完成');
  })
}).on('error', function(e){
  console.log(e.message);
});

req.write(postData);
req.end();
