var express = require('express');
var app = express();
var mysql = require('mysql');
var server = require("http").Server(app);
var io = require('socket.io')(server);

//create connection
const db = mysql.createConnection({
	host: "sql9.freemysqlhosting.net",
	user: "sql9281167",
	password: "QFpnvu4aCL",
	database: 'sql9281167'
});

app.set("views", "./views");
app.set("view engine", "ejs");

//test database 
io.on("connection",(socket)=>{
	let sqlQuery = "SELECT * FROM posts";
	db.query(sqlQuery,(err,result)=>{
		if(err) throw err;
		io.emit("database",result);
	});
});

// setup public folder
app.use(express.static("public"));

// -------------setup routes-----------------
var index = require("./routes/index.js");
app.use("/", index);
var loginPage = require('./routes/loginPage.js');
app.use("/loginPage", loginPage);
var ips = require('./routes/ips.js');
app.use("/ips", ips);
// const err = require('./routes/404.js');
// app.use('*', err);

server.listen(process.env.PORT || 3000, console.log("server is runing at 3000"));