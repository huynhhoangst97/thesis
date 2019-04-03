var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//var db = require('../connectMysql');
var router=express.Router();
var location = require('../model/location');


router.get("/",function(req,res) {
	if(req.isAuthenticated()){
		res.render("./index	");
	}else {
		res.render("./loginPage");
	}
})

module.exports=router;