const express = require('express');
const router = express.Router();
const worksCtrl = require('../controllers/works');
        
// GET /movies/new
router.get('/new', worksCtrl.new);
        
module.exports = router;
