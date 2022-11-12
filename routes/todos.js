var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos')

router.post('/works/:id/todos', todosCtrl.create)
router.delete('/works/:id/todos/:todosId', todosCtrl.delete);

module.exports = router;
