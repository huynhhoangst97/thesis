var mysql =require('mysql');
var mysqlConnection = mysql.createConnection({
	host: "sql9.freemysqlhosting.net",
	user: "sql9283294",
	password: "v7zJgtU9nY",
	database: 'sql9283294'
});
module.exports= mysqlConnection;