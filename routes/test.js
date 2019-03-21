var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//var db = require('../connectMysql');
var router=express.Router();
var location = require('../model/location');

router.get("/",(req,res)=>{
	res.render('./test.ejs');
});
module.exports=router;