var db = require('../connectMongodb');

var Schema =db.Schema;
var gatewaySchema = new Schema({
	tag:String,
	id: String
});
var gateway = db.model('gateway', gatewaySchema,'gateway');
module.exports= gateway;