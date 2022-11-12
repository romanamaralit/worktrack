const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  task: String,
  deadline: Date,
  content: String
}, {
  timestamps: true
});


const workSchema = new Schema({
  subject: String,
  semester: String,
  todos: [todoSchema]
},
{
  timestamps: true,
});

module.exports = mongoose.model('Work', workSchema);