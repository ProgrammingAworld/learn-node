// const path = require('path');
// var str = path.normalize('./path//iamge/upload/filr/../123/./1.png');
// console.log(str);

const path = require('path');
// var str = path.join('./path/./', './image', '/file', '123.png');
// console.log(str);

console.log(path.isAbsolute('/foo/bar')); path.isAbsolute('/foo/bar') // true
console.log(path.isAbsolute('/baz/..')); path.isAbsolute('/baz/..')  // true
console.log(path.isAbsolute('qux/')); path.isAbsolute('qux/')     // false
console.log(path.isAbsolute('.')); path.isAbsolute('.')        // false









// const URL = require('url');
//
// var address = 'http://www.jianshu.com/writer#/notebooks/11347346/notes/14989939';
//
// console.log(URL.parse(address));

//
// const url = require("url");
// var urlObj = {
//     protocol:"https",
//     slashes:true,
//     hostname:"www.baidu.com",
//     pathname:"/zhidao/content.html"
// };
// console.log(url.format(urlObj));


// const url = require("url");
//
// console.log(url.resolve("/one/two/three","four"));
// console.log(url.resolve("/one/two/","four"));
// console.log(url.resolve("http://www.baidu.com","/topic"));
// console.log(url.resolve("http://www.baidu.com/one","topic"));

// const qs = require('querystring');
// console.log(qs.parse("user=abc&pass=123456&interests=fishing&interests=reading"));
