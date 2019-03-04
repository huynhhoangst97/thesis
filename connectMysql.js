var mysql =require('mysql');
var mysqlConnection = mysql.createConnection({
	host: "sql9.freemysqlhosting.net",
	user: "sql9281167",
	password: "QFpnvu4aCL",
	database: 'sql9281167'
});
module.exports= mysqlConnection;