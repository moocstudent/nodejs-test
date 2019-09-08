//引入http模块
var http = require('http');
//准备处理请求和响应的service函数,就像是servlet里的doGet, doPost方法.
//这个service函数做了两件事:
// a. 设置返回代码200, 以及返回格式为 text/plain
// b. 返回内容是: Hello Node.js
function service(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello Node.js');
}
//基于service函数来创建服务器
var server = http.createServer(service);
//服务器监听于8088端口
server.listen(8088);

