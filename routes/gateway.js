var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//var db = require('../connectMysql');
var router=express.Router();
var gateway  = require('../model/gateway');

router.get("/5322",(req,res)=>{
	gateway.findOneAndUpdate({ tag: '5322' },{ id: req.query.id },(err,result)=>{
			if(err) throw err;
			res.send("successful");
	})
});
router.get("/",(req,res)=>{
    res.send("ok")
})
module.exports=router;