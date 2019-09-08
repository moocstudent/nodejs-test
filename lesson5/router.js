//路由器
function route(handle,pathname){
	if(typeof handle[pathname] === 'function'){
		return handle[pathname](); //返回控制器执行方法
	}else{
		return pathname + ' is not defined';
	}
}

exports.route = route;//封装路由