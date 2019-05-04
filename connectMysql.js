var mysql =require('mysql');
var mysqlConnection = mysql.createConnection({
	host: "sql9.freemysqlhosting.net",
	user: "sql9290564",
	password: "i4pic6jye5",
	database: 'sql9290564'
});
module.exports= mysqlConnection;