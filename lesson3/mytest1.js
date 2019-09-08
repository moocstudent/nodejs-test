//该js同样要和server2.js同目录
//定义了两个函数
//和之前的server.js里的请求处理函数一模一样的service函数
function service(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello Node.js');
}
//new function say hello
function sayHello(){
	console.log('hello from mytest1.js');
}
//上面两个函数并不能通过外部调用, 除非通过exports指定如何去调用他们
exports.hi = sayHello;
//允许外部通过service()同名调用
exports.service = service;