var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
	title: String,
	rating: Number,
	review: String,
});

module.exports = mongoose.model('Movie', MovieSchema);