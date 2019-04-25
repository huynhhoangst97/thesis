var express = require('express');
var router=express.Router();
const { ensureAuthenticated } = require('../config/auth');

// router.get('/',(req,res)=>{
//     res.render("./ips.ejs")
// });

router.get('/', ensureAuthenticated, (req, res) =>
  res.render('ips', {
    user: req.user
  })
);
module.exports=router;