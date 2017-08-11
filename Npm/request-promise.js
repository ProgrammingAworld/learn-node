var rp = require('request-promise');
var cheerio = require('cheerio');

var options = {
  method: 'POST',
  url: 'http://www.baidu.com',
  body: {
    some: 'payload'
  },
  json: true
}

rp(options)
  .then(function(res) {
    console.log(res.body);
  })
  .catch(function(err) {
    console.log(err);
  })

  var options = {
      method: 'DELETE',
      uri: 'http://my-server/path/to/resource/1234',
      resolveWithFullResponse: true //获得响应的全部内容，而不是只是获取到想用的body
  };

  rp(options)
      .then(function (response) {
          console.log("DELETE succeeded with status %d", response.statusCode);
      })
      .catch(function (err) {
          // Delete failed...
      });







// var options = {
//   url: 'http://www.baidu.com',
//   headers: {
//     'User-Agent': 'Request-Promise'
//   },
//   qs: {
//     access_token: '...'  // 实际请求的时候路径 ： url + '?access_token='...''
//   },
//   json: true // 自动的把响应的内容转成JSON格式
// }
//
// rp(options)
//   .then(function(res) {
//     // to do something
//   })
//   .catch(function(err) {
//     // to do something
//   })



// var options = {
//   url: 'http://www.baidu.com',
//   transform: function(body) {
//     return cheerio.load(body);
//   }
// }
//
// rp(options)
//   .then(function($) {
//     console.log($.html());
//   })
//   .catch(function(err) {
//     console.log(err);
//   })


// rp('http://www.baidu.com')
//   .then(function(htmlString) {
//     console.log(htmlString);
//   })
//   .catch(function(err) {
//     console.log(err);
//   })
