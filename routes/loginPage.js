var express = require('express');
var router=express.Router();

router.get('/',(req,res)=>{
    res.render("./loginPage.ejs")
});
module.exports=router;