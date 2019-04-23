var localStrategy = require('passport-local').Strategy;
var db = require('../connectMysql');
const bcrypt = require('bcrypt');

module.exports = (passport) => {
    passport.use(new localStrategy(
        (username, password, done) => {
            let sql = "Select * from user Where user = ?";
            db.query(sql, username, (err, data) => {
                //if (err) throw err;
                if (data[0] === undefined) {
                    return done(null, false);
                }
                else {
                    bcrypt.compare(password, data[0]['password'], (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, data[0]);
                        } else {
                            return done(null, false);
                        }
                    })
                }
            })
        }

    ));

    passport.deserializeUser((name, done) => {
        let sql = "Select * from user Where user = ?";
        db.query(sql,name,(err,data)=>{
            if(data[0]===undefined){
                return done(null, false);
            } else{
                return done(null, data[0]);
            }
        })
    });

    //passport serializeUser
    passport.serializeUser((user, done) => {
        done(null, user.user);
    });


}

// var fs = require('fs');
// var passport = require('passport');
// var localStrategy = require('passport-local').Strategy;

// module.exports = (passport)=>{
//     passport.use(new localStrategy(
//         (username, password, done) => {
//             fs.readFile('./userDB.json', (err, data) => {
//                 var db = JSON.parse(data);
//                 var userRecord = db.find(user => user.user === username);
//                 if (userRecord && userRecord.pas === password) {
//                     return done(null, userRecord);
//                 } else {
//                     return done(null, false);
//                 }
//             });
//         }
//     ));
    
//     //passport deserializeUser
//     passport.deserializeUser((name, done) => {
//         fs.readFile("./userDB.json", function (err, data) {
//             var db = JSON.parse(data);
//             var userRecord = db.find(user => user.user === name);
//             if (userRecord) {
//                 return done(null, userRecord);
//             } else {
//                 return done(null, false);
//             }
//         });
//     });
//     //passport serializeUser
//     passport.serializeUser((user, done) => {
//         done(null, user.user);
//     });
// }