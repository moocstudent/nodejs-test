var server = require("./server3");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/listCategory"] = requestHandlers.listCategory;
handle["/listProduct"] = requestHandlers.listProduct;
handle["/listStudents"] = requestHandlers.listStudents;

server.start(router.route,handle);