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
    work.save(function(err) {
      if (err) return res.redirect('/works/new');
      console.log(work);
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
      console.log(work.todos)
      res.render('works/show', { title: 'Worktrack', work });
    });
  }

  function deleteWork(req, res) {
    console.log(req.params.id)
   Work.deleteOne({_id: req.params.id}, function (err,work){
    res.redirect('/works');
   });
  }