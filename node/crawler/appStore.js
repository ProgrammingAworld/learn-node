var request = require('request');
var fs = require('fs');

request('https://rss.itunes.apple.com/api/v1/cn/ios-apps/top-paid/500/explicit.json', function(err, res, body) {
  if (err) {
    console.log(err);
  } else {
      body = JSON.parse(body);
      console.log(body['feed']['results'].length);
    // fs.writeFile('data.json', body, function(err) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     body = JSON.parse(body);
    //     console.log(body['feed']['results'].length);
    //   }
    // })
  }
})
