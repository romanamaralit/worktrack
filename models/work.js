const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
	        
const workSchema = new Schema({
  subject: String,
  semester: String
},
{
  timestamps: true,
});

module.exports = mongoose.model('Work', workSchema);