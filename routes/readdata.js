var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//var db = require('../connectMysql');
var router=express.Router();
var location = require('../model/location');

router.get("/",(req,res)=>{
	location.findOneAndUpdate({tag:"aa02"},{location:{xcale:req.query.longitude,ycale:req.query.latitude}},(err,result)=>{
			if(err) throw err;
			res.send("successful");
	})
});
module.exports=router;