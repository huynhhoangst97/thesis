var db = require('../connectMongodb');

var Schema =db.Schema;
var anchorSchema = new Schema({
	tag:String,
	location: {
		xcale: Number,
		ycale: Number
	}
});
var anchor = db.model('anchor', anchorSchema,'anchor');
module.exports= anchor;