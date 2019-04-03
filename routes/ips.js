var express = require('express');
var router=express.Router();

// router.get('/',(req,res)=>{
//     res.render("./ips.ejs")
// });

router.get("/",function(req,res) {
	if(req.isAuthenticated()){
        res.render("./ips")
	}else {
		res.render("./loginPage");
	}
})

module.exports=router;