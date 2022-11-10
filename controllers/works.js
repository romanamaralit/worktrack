const Work = require('../models/work');
module.exports = {
  new: newWork,
  create,
  index,
  show,
  delete: deleteWork
};

function newWork(req, res) {
    res.render('works/new', { title: 'Add Subject' });
  }

function create(req, res) {
    const work = new Work(req.body);
  //save movie into database
    work.save(function(err) {
      // if we don't redirect, the new page will be shown
      // with /movies in the address bar
      if (err) return res.redirect('/works/new');
      console.log(work);
      // for now, redirect right back to new.ejs
      res.redirect('/works');
    });
  }

  function index(req, res) {
    Work.find({}, function(err, works) {
      res.render('works/index', { title: 'Worktrack', works });
    });
  }

  function show(req, res) {
    Work.findById(req.params.id, function(err, work) {
      res.render('works/show', { title: 'Worktrack', work });
    });
  }

  function deleteWork(req, res) {
    Work.deleteOne(req.params.id);
    res.redirect('/works');
  }

