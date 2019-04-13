const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
var user = require("../model/user");
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const bcrypt = require('bcrypt');
const saltRounds = 10;
const someOtherPlaintextPassword = 'not_bacon';

router.post('/', urlencodedParser, (req, res) => {
    // bcrypt.hash(req.body.pas, saltRounds, function(err, hash) {
    //     user.insertUser(req.body.user,hash);
    //     console.log(hash);
    //   });
    // var passHash;
    // user.showUser((err,data)=>{
    //     passHash = data[0]['password'];
    //     bcrypt.compare(req.body.pas,passHash,(err,result)=>{
    //         console.log(result);
    //     })
    // })
    var username = req.body.user;
    var password = req.body.pas;
    user.isMatchUser(username,password,(err,data)=>{
        console.log(data);
    })
    

    // user.showUser((err, data) => {
    //     const pass =req.body.pas.toString();
    //     const hash = data[0]['password'].toString();
    //     //console.log(pass)
    //     if (req.body.user == "huynh") {
    //         bcrypt.compare( pass, hash, function (err, isMatch) {
    //             if(err) throw err;
    //             if (isMatch) {
    //                 console.log('done');
    //             } else {
    //                 console.log('false');
    //             }

    //         });
    //     } else {
    //         console.log('false1');
    //     }
    // })
    // bcrypt.hash(req.body.pas, saltRounds, function(err, hash) {
    //     user.insertUser(req.body.user,hash);
    //   });
    
})

module.exports = router;
