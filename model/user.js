var db = require('../connectMysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var user = {
    showUser: (callback) => {
        return db.query("Select * from user", callback);
    },
    insertUser: (username,password) => {
        let post= {user:username, password:password};
        let sql="INSERT INTO user SET ?";
        db.query(sql,post,(err,result)=>{
            if(err) throw err;
        })
    },
    isMatchUser: (username, password, callback) =>{
        let sql = "Select * from user Where user = ?";
        db.query(sql,username,(err,data)=>{
            var passwordDB=data[0]['password'];
            return bcrypt.compare(password,passwordDB,callback);
        });
        
    }
}
module.exports = user;
