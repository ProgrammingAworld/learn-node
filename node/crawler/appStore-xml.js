var request = require('request');
var fs = require('fs');

request('https://search.itunes.apple.com/WebObjects/MZSearchHints.woa/wa/hints?cc=cn&q=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80', function(err, res, body) {
  if (err) {
    console.log(err);
  } else {
      console.log(body);
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
