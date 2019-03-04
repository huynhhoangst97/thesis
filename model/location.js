var db = require('../connectMongodb');

var Schema =db.Schema;
var personSchema = new Schema({
	thu:String,
	name: {
		first: String,
		last: String
	}
});
var Person = db.model('nguoi', personSchema,'location');
module.exports= Person;