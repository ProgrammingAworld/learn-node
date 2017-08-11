var superagent = require('superagent');
// 浏览器请求报文头部部分信息
    var browserMsg={
        "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36"
    };

    //访问登录接口获取cookie
    function getLoginCookie(userid, pwd) {
        userid = userid.toUpperCase();
        return new Promise(function(resolve, reject) {
            superagent.post(url.login_url).set(browserMsg).send({
                userid: userid,
                pwd: pwd,
                timezoneOffset: '0'
            }).redirects(0).end(function (err, response) {
                //获取cookie
                var cookie = response.headers["set-cookie"];
                resolve(cookie);
            });
        });
    }

    function getData(cookie) {
            return new Promise(function(resolve, reject) {
                //传入cookie
                superagent.get(url.target_url).set("Cookie",cookie).set(browserMsg).end(function(err,res) {
                    var $ = cheerio.load(res.text);
                    resolve({
                        cookie: cookie,
                        doc: $
                    });
                });
            });
        }
