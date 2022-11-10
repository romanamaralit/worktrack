const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
  deleteOne
};

const todoSchema = new Schema({
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

function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = works.findIndex(work => work.id === id);
  works.splice(idx, 1);
}
module.exports = mongoose.model('Work', workSchema);