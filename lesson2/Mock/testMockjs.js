//引用mockjs模块
var Mock = require('mockjs')
var data = Mock.mock({
	//属性 list 的值是一个数组, 其中含有1到10个元素
	'list|1-10':[{
		//属性 id 是一个自增数, 起始值为1 , 每次增加1
		'id|+1': 1
	}]
});

//输出结果
console.log(JSON.stringify(data,null,4));