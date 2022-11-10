const express = require('express');
const { route } = require('.');
const router = express.Router();
const worksCtrl = require('../controllers/works');
	
/* GET movies listing. */
router.get('/new', worksCtrl.new);
/* POST new movie */
router.post('/', worksCtrl.create);
/*GET all movies */
router.get("/", worksCtrl.index);
module.exports = router;
