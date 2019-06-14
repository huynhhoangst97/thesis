var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//var db = require('../connectMysql');
var router=express.Router();
var location = require('../model/location');

router.get("/152a",(req,res)=>{
	location.findOneAndUpdate({tag:"152a"},{location:{xcale:req.query.longitude,ycale:req.query.latitude}},(err,result)=>{
			if(err) throw err;
			res.send("successful");
	})
});
router.get("/0c01",(req,res)=>{
	location.findOneAndUpdate({tag:"0c01"},{location:{xcale:req.query.longitude,ycale:req.query.latitude}},(err,result)=>{
			if(err) throw err;
			res.send("successful");
	})
});
module.exports=router;