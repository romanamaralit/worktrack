const Work = require('../models/work');
module.exports = {
  new: newWork
};

function newWork(req, res) {
    res.render('works/new');
  }
