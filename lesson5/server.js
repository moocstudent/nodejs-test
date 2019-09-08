//import modules
var http = require("http");
var url = require("url");

//function
function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname; //获取路径名称
		var html = route(handle,pathname); //调用路由,通过handle控制器获取该路径的控制层方法
		response.writeHead(200,{"Content-Type":"text/plain"}); //写返回信息及html格式
		response.write(html); //通过控制层方法获取回来的数据写入html
		response.end(); //返回结束 类似java里的关流语句
	}
	http.createServer(onRequest).listen(8088); //创建服务,监听端口
}

exports.start = start; //封装方法 start