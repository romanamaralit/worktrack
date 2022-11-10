const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
	        
const workSchema = new Schema({
  subject: String,
  semester: String
});

module.exports = mongoose.model('Work', workSchema);