var fs = require('fs');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

module.exports = (passport)=>{
    passport.use(new localStrategy(
        (username, password, done) => {
            fs.readFile('./userDB.json', (err, data) => {
                var db = JSON.parse(data);
                var userRecord = db.find(user => user.user === username);
                if (userRecord && userRecord.pas === password) {
                    return done(null, userRecord);
                } else {
                    return done(null, false);
                }
            });
        }
    ));
    
    //passport deserializeUser
    passport.deserializeUser((name, done) => {
        fs.readFile("./userDB.json", function (err, data) {
            var db = JSON.parse(data);
            var userRecord = db.find(user => user.user === name);
            if (userRecord) {
                return done(null, userRecord);
            } else {
                return done(null, false);
            }
        });
    });
    //passport serializeUser
    passport.serializeUser((user, done) => {
        done(null, user.user);
    });
}