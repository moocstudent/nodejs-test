//router函数第一个参数 handle 是一个数组, 第二个参数是路径
function route(handle,pathname){
	if(typeof handle[pathname] === 'function'){
		return handle[pathname]();
	}else{
		return pathname + ' is not defined';
	}
}
exports.route = route;

