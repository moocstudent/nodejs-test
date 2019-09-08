//控制器
var fs = require("fs");

function indexPage(){
	return "index";
}

function listCategory(){
	return "a lot of categorys";
}

function listProduct(){
	return "a lot of products";
}

function readFile(){
	var html = fs.readFileSync('mytest.html');
	return html;
}

function writeFile(){ //版本高的nodejs 必须判定 err (错误抓取 类似java try catch)
	fs.writeFile('theWriteFile.html',"this is a test for writeFile function.",(err)=>{
		if(err) throw err;
	});
	return "write file successfully!";
}

exports.indexPage = indexPage;
exports.listCategory = listCategory;
exports.listProduct = listProduct;
exports.readFile = readFile;
exports.writeFile = writeFile;
