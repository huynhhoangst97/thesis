var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//var db = require('../connectMysql');
var router=express.Router();
var anchor  = require('../model/anchor');

router.get("/0296",(req,res)=>{
	anchor.findOneAndUpdate({tag:"0296"},{location:{xcale:req.query.longitude,ycale:req.query.latitude}},(err,result)=>{
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

router.get("/0384",(req,res)=>{
	anchor.findOneAndUpdate({tag:"0384"},{location:{xcale:req.query.longitude,ycale:req.query.latitude}},(err,result)=>{
			if(err) throw err;
			res.send("successful");
	})
});

router.get("/4134",(req,res)=>{
	anchor.findOneAndUpdate({tag:"4134"},{location:{xcale:req.query.longitude,ycale:req.query.latitude}},(err,result)=>{
			if(err) throw err;
			res.send("successful");
	})
});

module.exports=router;