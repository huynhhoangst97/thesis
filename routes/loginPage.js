var express =require("express");
var router = express.Router();
var passport=require('passport');
router.route('/')
        .get((req,res)=>res.render("loginPage"))
        .post(passport.authenticate('local',{failureRedirect:"/loginPage",
                                             successRedirect:"/ips"}));

//Export
module.exports= router;