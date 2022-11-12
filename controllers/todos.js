var Work = require('../models/work');

module.exports = {
  create,
  delete: deleteTodo
};

function create(req, res) {
    Work.findById(req.params.id, function(err, work) {
      work.todos.push(req.body);
      work.save(function(err) {
        res.redirect(`/works/${work._id}`);
      });
    });
  }

  function deleteTodo(req, res, next){
    Work.findOne({
        "_id": req.params.id,
    })
    .then(function(work){
      console.log("🪲", work)
      console.log("🪲",req.params.todosId)
        work.todos.remove(req.params.todosId);
        work.save()
        .then(function() {
            res.redirect(`/works/${work._id}`)
        })
        .catch(function (err) {
            return next(err);
          });
    })
}

  // function deleteTodo(req, res) {
  //   console.log(req.params.id)
  //  Work.todos.findById({_id: req.params.todosId}, function (err,todo){
  //   todo.remove(req.params.todosId)
  //   res.redirect(/works/)
  //   // res.redirect(`/works/${work._id}`);
  //  });
  // }


  // function deleteWork(req, res, next) {
  //   Work.findOne({'todos._id': req.params.id}).then(function(work) {
  //     console.log(todos._id)
  //     todos.findByIdAndRemove(req.params.id);
  //     work.save().then(function() {
  //       res.redirect(`/works/${work._id}`);
  //     }).catch(function(err) {
  //       return next(err);
  //     });
  //   });
  // }
