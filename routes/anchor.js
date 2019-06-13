var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//var db = require('../connectMysql');
var router=express.Router();
var anchor  = require('../model/anchor');

router.get("/5583",(req,res)=>{
	anchor.findOneAndUpdate({tag:"5583"},{location:{xcale:req.query.longitude,ycale:req.query.latitude}},(err,result)=>{
			if(err) throw err;
			res.send("successful");
	})
});
router.get("/8305",(req,res)=>{
	anchor.findOneAndUpdate({tag:"8305"},{location:{xcale:req.query.longitude,ycale:req.query.latitude}},(err,result)=>{
			if(err) throw err;
			res.send("successful");
	})
});
module.exports=router;