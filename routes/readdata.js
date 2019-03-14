var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var router=express.Router();

router.get('/',(req,res)=>{
    var u= req.query.latitude;
    var p= req.query.longitude;
    res.send("user:"+u+"    "+"pas:"+p);
});
module.exports=router;