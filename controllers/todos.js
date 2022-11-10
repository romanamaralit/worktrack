var Work = require('../models/work');

module.exports = {
  create
};

function create(req, res) {
    Work.findById(req.params.id, function(err, work) {
      work.todos.push(req.body);
      work.save(function(err) {
        res.redirect(`/works/${work._id}`);
      });
    });
  }
  
