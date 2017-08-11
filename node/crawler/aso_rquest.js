var request = require('request');
var fs = require('fs');
//var http = require('http');

var header = '2CXykEOCoD0egW%2FFKMMNvA3OeqsPGSNwvXD8D%2B3fX6qFbXpz762oc605piLbWSxKlSuGoJixVFlKl9IhedNkVdMIf1JWB96vNOclZ6xSa4s%3D';

function getHtmlByUrl(href) {
    request(href, function(err, response, body) {
        if (!err && response.statusCode == 200) {

          fs.writeFile('aso_request.html', body, function(err) {
            if (err) {
              console.log(err);
            } else {
            }
          })

        } else {
            console.log('get page error url => ' + href);
        }
    });
}
getHtmlByUrl("https://aso100.com/app/keyword/appid/1229539533/country/cn");
