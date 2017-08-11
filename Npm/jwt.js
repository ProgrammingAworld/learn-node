// // 默认是以 HS256 的加密方式加密
// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// var cert = '123'; //加密的字符串
//
// // 回退30秒钟
// var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');
//
// // 以 RS256 的方式加密
//
// var token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256'});
//
// // 异步方式加密
// jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256' }, function(err, token) {
//   console.log(token);
// });
//
//
// // 签署一个小时期限的token
// jwt.sign({
//   exp: Math.floor(Date.now() / 1000) + (60 * 60),
//   data: 'foobar'
// }, '加密的字符');
//
// // 还可以使用下面的方式实现
// jwt.sign({
//   data: 'foobar'
// }, 'secret', { expiresIn: 60 * 60 });
//
// //此方法也可以达到目的
//
// jwt.sign({
//   data: 'foobar'
// }, 'secret', { expiresIn: '1h' });







var jwt = require('jsonwebtoken');

var Otoken = jwt.sign({
  name: 'zzh',
  password: 'zzh'
}, 'zzh', {
  algorithm: 'HS256',
  expiresIn: 1*1
});

setTimeout(function() {
  jwt.verify(Otoken, 'zzh', {
    algorithm: 'HS256'
  }, function(err, decoded) {
    if (err) {
      console.log("err:" + err);
    }else {
      console.log('decoded' + decoded);
    }
  });
}, 3000)

输出： err:TokenExpiredError: jwt expired

//{ name: 'zzh', password: 'zzh', iat: 1501054855 }
