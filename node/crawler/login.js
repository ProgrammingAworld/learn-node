// var superagent = require('superagent');
// var fs = require('fs');
// superagent
//     .post('http://backend.cqaso.com/account/login')
//     .set('Content-Type', 'x-www-form-urlencoded')
//     .send('profile=15711497681' )
//     .send('password=hao19931220')
//     .redirects(0)
//     .end(function (err, res) {
//       if(err) {
//         console.log(err);
//       } else {
//         console.log(res.token);
//       }
//     })

var request = require('request');
request = request.defaults({jar: true});
let token,
    j = request.jar(),
    url = 'http://backend.cqaso.com/app/1048355267/asoWord/%E8%A1%97%E6%9C%BA%E6%B8%B8%E6%88%8F/20170806/20170809?duration=60&country=CN';

request.post('http://backend.cqaso.com/account/login', {form: {profile:'15711497681', password: 'hao19931220'}}, function(err, res, body) {
  if (err) {
    console.log(err);
  } else {
    token = JSON.parse(body).token;
    console.log(token);
    cookie = request.cookie(token);
    j.setCookie(cookie, url, function(err, cookie) {
      if (err) {
        console.log('设置cookie出错了');
      }
    });
    request({url: url, jar: j}, function(err, res) {
      console.log(res);
    })
  }
})
