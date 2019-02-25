var express = require('express');
var mysql =require('mysql');

var app =express();
app.set("views", "./views");
app.set("view engine", "ejs");

 var app = express();
 app.listen(process.env.PORT||3000,console.log("server is runing at 3000"));

 // setup public folder
app.use(express.static("public"));

// -------------setup routes-----------------
var index = require("./routes/index.js")
app.use("/",index);
var loginPage = require('./routes/loginPage.js');
app.use("/loginPage",loginPage);
var ips = require('./routes/ips.js');
app.use("/ips",ips);
var err = require('./routes/404.js');
app.use('*',err);

