var express = require("express");
var router = express.Router();
var passport = require('passport');
var db = require('../connectMysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const bodyParser = require('body-parser');
const { forwardAuthenticated } = require('../config/auth');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

//register
router.post('/register', urlencodedParser, (req, res) => {
  var fullName = req.body.fullName;
  var email = req.body.email;
  var password = req.body.password;

  // check password
  if (password.length < 6) {
    res.render('register', { msg: 'Please enter more than 6 characters  !!!' });
  } else {
    let sql = "Select * from user Where email = ?"
    db.query(sql, email, (err, data) => {
      // email isn't exist
      if (data[0] === undefined) {
        bcrypt.hash(password, saltRounds, (err, data) => {
          
          let post = { fullName: fullName, email: email, password: data };
          let sql = "INSERT INTO user SET ?";
          db.query(sql, post, (err, result) => {
            res.render('login', { msg_success: ' Account already create!!!' });
          })
        });
      } else {
        res.render('register', { msg: "Email already exists !!!" })
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

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
});

//Export
module.exports = router;