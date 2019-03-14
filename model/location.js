var db = require('../connectMongodb');

var Schema =db.Schema;
var locaitionSchema = new Schema({
	tag:String,
	location: {
		xcale: Number,
		ycale: Number
	}
});
var location = db.model('location', locaitionSchema,'location');
module.exports= location;