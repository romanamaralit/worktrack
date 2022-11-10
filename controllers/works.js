const Work = require('../models/work');
module.exports = {
  new: newWork,
  create,
  index
};

function newWork(req, res) {
    res.render('works/new');
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

  function index(req,res) {
    //movies refers to found Movie documents in MondoDB
    Work.find({}, function(err, works){
        if (err) {
            console.log(err);
            res.redirect("/");
        }
        res.render('works/index', {works});
    });
  }

  //do partials for views