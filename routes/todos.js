var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos')

router.post('/works/:id/todos', todosCtrl.create)
router.delete('/works/:id/todos/:todosId', todosCtrl.delete);
router.put('/works/:id/todos/:todosId', todosCtrl.update);
router.get('/works/:id/todos/:todosId/edit', todosCtrl.edit);

module.exports = router;
