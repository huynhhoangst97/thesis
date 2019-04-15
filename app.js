var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var user = require("./model/user");
var location = require("./model/location");
var session = require('express-session');
var passport = require('passport');
var fs = require('fs');
var bodyParser = require('body-parser');
var localStrategy = require('passport-local').Strategy;

app.set("views", "./views");
app.set("view engine", "ejs");

// user.showUser((err,data)=>{
// 	console.log(data);
// })

// location.create({
// 	tag: "aa02",
// 	location: {
// 		xcale: 14.5,
// 		ycale: 34
// 	}
// }, (err, doc) => {
// 	if (err) throw err;
// })

// io.on("connection", socket => {
//   location.find({ tag: "aa02" }, (err, res) => {
//     if (err) throw err;
//     socket.emit("mongo", res);
//   });
//   user.showUser((err, data) => {
//     if (err) throw err;
//     socket.emit("database", data);
//   });
//   socket.emit("testAjax", Math.random());
// });

//------------------ session-------------//
// app.use(session({
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: true
// }))

//-----------passport config------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "mysecret" }));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.get("/loginOk",(req,res)=>{
  res.send("hello");
})
// setup public folder
app.use(express.static("public"));

// -------------setup routes-----------------

var product = require("./routes/product.js");
app.use("/product",product);
var index = require("./routes/index.js");
app.use("/", index);
var loginPage = require("./routes/loginPage.js");
app.use("/loginPage", loginPage);
var ips = require("./routes/ips.js");
app.use("/ips", ips);
var readData = require("./routes/readdata.js");
app.use("/readdata", readData);
var signup = require("./routes/signup.js");
app.use("/signup", signup);
var test = require("./routes/test.js");
app.use("/test", test);
const err = require("./routes/404.js");
app.use("*", err);

server.listen(
  process.env.PORT || 3000,
  console.log("server is runing at 3000")
);

//test 