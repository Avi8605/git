var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
	//accountId is auto
	name: {type: String},
	color: {type: String},

}, {timestamps: true});

module.exports = mongoose.model('contactSchema', contactSchema);
