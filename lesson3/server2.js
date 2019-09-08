var http = require('http');
//通过./mytest1来加载这个模块,记得加上./,否则会到node安装目录下去寻找,是找不到的
var test = require('./mytest1'); 
//调用hi()函数,间接地就调用了mytest1.js里的sayHello()函数,因此可以看到如图所示的打印信息
test.hi();
//基于test.service()函数创建服务
var server = http.createServer(test.service);
//监听端口
server.listen(8088);