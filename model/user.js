var db = require('../connectMysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var user = {
    showUser: (username, callback) => {
        let sql = "Select * from user Where user = ?";
        db.query(sql, username, (err, data) => {
            if (data[0] === undefined) {
                return false;
            } else {
                 return db.query(sql, username, callback);
            }
           
        });
        
    },
    insertUser: (username, password) => {
        let post = { user: username, password: password };
        let sql = "INSERT INTO user SET ?";
        db.query(sql, post, (err, result) => {
            if (err) throw err;
        })
    },
    isMatchUser: (username, password, callback) => {
        let sql = "Select * from user Where user = ?";
        db.query(sql, username, (err, data) => {
            if (data[0] === undefined) {
            }
            else {
                var passwordDB = data[0]['password'];
                if (err) throw err;
                return bcrypt.compare(password, passwordDB, callback);
            }

        });
        // db.query(sql, username, (err, data) => {
        //     var passwordDB = data[0]['password'];
        //     return bcrypt.compare(password, passwordDB, callback);
        // });

    }
}
module.exports = user;
