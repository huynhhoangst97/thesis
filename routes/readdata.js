var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var db = require('../connectMysql');
var router=express.Router();


router.get("/",(req,res)=>{
	let post= {id:req.query.id, ten:req.query.ten};
	let sql="INSERT INTO posts SET ?";
	db.query(sql,post,(err,result)=>{
		if (err) throw err;
		res.send("insert successed..");
	})
});
module.exports=router;