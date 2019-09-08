//引入http模块
var http = require('http');
//引入url模块,帮助解析
var url = require('url');
//引入querystring库, 也是帮助解析用的
var querystring = require('querystring');

function service(req,resp){
	//获取返回的url对象的query属性值
	var arg = url.parse(req.url).query;
	//将arg参数字符串反序列化为一个对象
	var params = querystring.parse(arg);
	//请求的方式
	console.log("method - "+req.method);
	//请求的url
	console.log("url -"+req.url);
	//获取参数id
	console.log("id - "+params.id);

	resp.writeHead(200,{'Content-Type':'text/plain'});
	resp.end('Hello Node.js');
}
var server = http.createServer(service);
//服务监听在8088端口
server.listen(8088);
