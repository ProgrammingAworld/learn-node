var request = require('request');

request.post('https://aso100.com/account/signinForm',{form:{username: '15711497681@163.com', password: 'hao./19931220'}}, function(err, res, body) {
  if (err) {
    console.log(err);
  } else {
    body = JSON.parse(body)
    console.log(body.ucenter);
  }
})


// request.get('https://aso100.com/app/keywordChangeHourlyInfoMore/source/keyword/appid/1125855154?device=iphone&country=cn&word_id=9757&word=ibeautya', function(err, res, body) {
//   if (err) {
//     console.log(err);
//   } else {
//     body = JSON.parse(body);
//     console.log(body.msg);
//   }
// })
