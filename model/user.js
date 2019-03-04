var db = require('../connectMysql');
var user = {
    showUser: function (callback) {
        return db.query("Select * from posts",callback);
    }
}
module.exports = user;