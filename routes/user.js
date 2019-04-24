var express = require("express");
var router = express.Router();
var passport = require('passport');
var db = require('../connectMysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const { forwardAuthenticated } = require('../config/auth');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register', { msg: '' }));

//register
router.post('/register', urlencodedParser, (req, res) => {
  var fullName = req.body.fullName;
  var email = req.body.email;
  var password = req.body.password;

  // check password
  if (password.length < 6) {
    res.render('register', { msg: 'password is so shot !!!' });
  } else {
    let sql = "Select * from test Where email = ?"
    db.query(sql, email, (err, data) => {
      // email isn't exist
      if (data[0] === undefined) {
        let post = { fullName: fullName, email: email, password: password };
        let sql = "INSERT INTO test SET ?";
        db.query(sql, post, (err, result) => {
          res.render('register', { msg: 'thanh cong!!!' });
        })
      } else {
        res.render('register', { msg: 'email is exist !!!' })
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/ips',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req, res, next);
});


//Export
module.exports = router;