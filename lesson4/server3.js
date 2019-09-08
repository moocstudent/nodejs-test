var http = require("http");
var url = require("url");

function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		var html = route(handle,pathname);
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write(html);
		response.end();
	}
	http.createServer(onRequest).listen(8088);
}

exports.start = start;