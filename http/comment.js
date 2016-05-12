/**
 * @file request方法
 * @authors 庄小云 (240395055@qq.com)
 *          ****** (1409@qq.com)
 * @date    2016-04-07 18:45:54
 * @version $Id$
 */

var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringfy({
    'content': '一起期待下一期的课程',
    'mid': 8837
})

var options = {
    hostname: "www.imooc.com",
    port: 80,
    path: '/course/document',
    method: 'post',
    headers: { //去reuqest的headers值
        'Accept': 'application/json, text/javascript, */*; q=0.01,',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.content.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=932f0113-77fe-4a0e-a142-d679266cb327; imooc_isnew_ct=1452683561; IMCDNS=0; loginstate=1; apsid=Q4ZWEzYzkyYWU3MjQxMmIxY2E4NmY5ZmY3NmRlZjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjI2NjIwMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyNDAzOTUwNTVAcXEuY29tAAAAAAAAAAAAAAAAAAAAADZiMWM3YTBhYzAxZmVmNGZjYzg5OTZkOGNhMzA4Y2Q1LB0DVywdA1c%3DYz; last_login_username=240395055%40qq.com; PHPSESSID=h9v1gpivs29p23njfmhhqq3g43; jwplayer.qualityLabel=è¶æ¸; jwplayer.volume=100; imooc_isnew=2; cvde=5705b5add5d3b-46; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1459821863,1459837144,1459991986,1460011635; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1460027094',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/comment/348',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = http.request(options, function(res) {
    /* body... */
    console.log('Status:' + res.statusCode)
    console.log('headers:' + JSON.stringfy(res.headers))

    res.on('data', function(chunk) {
        console.log(BUffer.isBuffer(chunk));
        console.log(typeof chunk)
    })

    res.on('end', function() {
        /* body... */
        console.log('评论完毕')
    })
    res.on('error', function(e) {
        /* body... */
        console.log('Error:' + e.message);
    })
})
req.write(postData)
req.end()
