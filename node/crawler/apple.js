var http = require('http');
var fs = require('fs');
var request = require("request");

var data = fs.readFileSync('./appID1.txt');
data = data.toString().trim().replace(/\n/g, ",");
var arr = data.split(',');


var num = 1;
var errorID = '';
var falseID = '';
var errorReq = '';

arr.map(function(item, index) {

  if(index % 100 == 0) {

  } else {
    console.log(item + "~");
  }


  //   let qs = {
  //     sn: item.trim()
  //   }
  //   var options = {
  //   	method: 'GET',
  //   	url: 'http://api.3023.com/apple/apple',
  //   	qs: qs,
  //   	headers: {
  //   		'key': 'b2bf6bd3e675bee21a576faf891c5697'
  //   	}
  //   };
  //
  //   request(options,
  //   function(error, response, body) {
  //   	if (error) {
  //       errorReq = errorReq + " " + item + " ";
  //       fs.writeFile('./errorReq.txt', errorReq, function(err) {
  //         console.log(item);
  //       })
  //       return;
  //     }
  //     if (JSON.parse(body)) {
  //       body = JSON.parse(body);
  //       console.log(index + " " + item + " " + body.model);
  //
  //       if (body.code) {
  //         if (body.code == 302311) {
  //           console.log(body.message);
  //           // errorID = errorID + " " + item + " ";
  //           // fs.writeFile('./errorID.txt', errorID, function(err) {
  //           //   console.log(item + '序列号错误');
  //           // })
  //         }
  //         if (body.code == 302312) {
  //           console.log(body.message);
  //           // falseID = falseID + " " + item + ' ' + num + ' ';
  //           // num ++;
  //           // fs.writeFile('./falseID.txt', falseID, function(err) {
  //           //   console.log(item + " " +body.message);
  //           // })
  //         }
  //         if (body.code == 302301) {
  //           console.log(body.message);
  //         }
  //         if (body.code == 302302) {
  //           console.log(body.message);
  //         }
  //         if (body.code == 302303) {
  //           console.log(body.message);
  //         }
  //         if (body.code == 302304) {
  //           console.log(body.message);
  //         }
  //         if (body.code == 302305) {
  //           console.log(body.message);
  //         }
  //         if (body.code == 302306) {
  //           console.log(body.message);
  //         }
  //         if (body.code == 302307) {
  //           console.log(body.message);
  //         }
  //       }
  //     } else {
  //       errorReq = errorReq + "~" + item + "~~~" + index;
  //       fs.writeFile('./errorReq.txt', errorReq, function(err) {
  //         console.log(errorReq);
  //       });
  //     }
  // })
})
