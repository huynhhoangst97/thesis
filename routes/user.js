var express =require("express");
var router = express.Router();
var passport=require('passport');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));


// Login
router.post('/login', (req, res, next) => {
        passport.authenticate('local', {
          successRedirect: '/ips',
          failureRedirect: '/user/login',
          failureFlash: false
        })(req, res, next);
      });

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

//Export
module.exports= router;