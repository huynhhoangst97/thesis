var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var router=express.Router();

router.post('/',(req,res)=>{
    var u= req.body.latitude;
    var p= req.body.longitude;
    res.send("user:"+u+"pas:"+p);
});
module.exports=router;