var http = require('http')

http.createServer(function (req,res) {
	 res.writeHead(200,{'content-Type':'text/plain'})
	 res.write('hell NodeJS')
	 res.end()
}).listen(2016)
console.log('服务起来了。。。')