var Work = require('../models/work');

module.exports = {
  create,
  delete: deleteTodo,
  update,
  edit
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

function edit(req, res) {
  Work.findOne({ '_id': req.params.id })
      .then(function (work) {
          const todo = work.todos.id(req.params.todosId)
          console.log(todo)
          res.render('todos/edit', { title: "Edit Todo Page", todo, work })
      })
}

function update(req, res) {
  Work.findOne({ '_id': req.params.id })
      .then(function (work) {
          const todo = work.todos.id(req.params.todosId)
          todo.task = req.body.task
          todo.deadline = req.body.deadline
          todo.content = req.body.content

          work.save(function (err) {
              if (err) return res.redirect('/works')
              res.redirect(`/works/${work._id}`)
          })
      })
}