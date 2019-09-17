var mysql = require("mysql");

var connection;

//准备函数 openConnection,其中填写数据库地址,账号密码,名称
function openConnection(){
	connection = mysql.createConnection({
		host : "60.205.224.226",
		user : "root",
		password : "thedatatheft",
		database : "nodejs"
	});
	//数据库连接
	connection.connect();
}

//准备函数closeConnection,用于关闭链接
function closeConnection(){
	connection.end();
}

//准备showAll函数查询所有数据
function showAll(){
	openConnection();
	var sql = "SELECT * FROM category";
	connection.query(sql,function(err,results){
		if(err){
			console.log("[SELECT ERROR] - ",err.message);
			return;
		}
		if(results){
			console.log(JSON.stringify(results));
			for(var i = 0; i > results.length; i++){
				//打印
				console.log("%d\t%s",results[i].id,results[i].name);
			}
		}
	});
	//关流
	closeConnection();
}


//添加数据
function add(name){
	openConnection();
	var params = [null,name];
	var sql = "insert into category values(?,?)";
	connection.query(sql,params,function(err,result){
		if(err){
			console.log("[INSERT ERROR] - ",err.message);
			return;
		}
		console.log("insert success,the generated id is :",result.insertId);
	});
	closeConnection();
}

//删除数据
function remove(id){
	openConnection();
	var params = [id];
	var  sql = "delete from category where id = ?";
    connection.query(sql,params,function (err, result) {
        if(err){
         console.log("[REMOVE ERROR] - ",err.message);
         return;
        }       
       console.log("remove id=%d success ",id);       
    });
    closeConnection(); 
}

//更新数据
function update(id,name){
    openConnection();
    var params = [name,id];
    var sql = "update category set name = ? where id = ?";
    connection.query(sql,params,function (err, result) {
        if(err){
         console.log("[UPDATE ERROR] - ",err.message);
         return;
        }       
        console.log("update success"+result.affectedRows);
 
    });
    closeConnection(); 
}

//按id查询获取
function get(id){
    openConnection();
    var params = [id]; 
    var  sql = "select * from category where id = ?";
    connection.query(sql,params,function (err, result) {
        if(err){
         console.log("[GET ERROR] - ",err.message);
         return;
        }       
        if(result.length !=0){
            var category = {id:result[0].id,name:result[0].name};
            console.log("get category:"+ JSON.stringify(result))
        }
        else{
            console.log("not found with id :" + id)
        }
         
    });
    closeConnection(); 
}

exports.showAll = showAll;
exports.add = add;
exports.remove = remove;
exports.update = update;
exports.get = get;
