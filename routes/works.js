const express = require('express');
const { route } = require('.');
const router = express.Router();
const worksCtrl = require('../controllers/works');
	
router.get('/new', worksCtrl.new);
router.post('/', worksCtrl.create);
router.get("/", worksCtrl.index);
router.get('/:id', worksCtrl.show);

module.exports = router;
