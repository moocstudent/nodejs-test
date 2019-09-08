//引入第三方模块
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

//声明控制器数组
var handle = {};
handle["/"] = requestHandlers.indexPage;
handle["/listCategory"] = requestHandlers.listCategory;
handle["/listProduct"] = requestHandlers.listProduct;
handle["/readFile"] = requestHandlers.readFile;
handle["/writeFile"] = requestHandlers.writeFile;

//启动服务端server.start
server.start(router.route,handle);