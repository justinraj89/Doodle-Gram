const express = require('express');
const router = express.Router();
const artworkController = require('../controllers/artwork');
const isLoggedIn = require('../config/auth');

router.get('/', artworkController.index);
router.get('/new', artworkController.new);



module.exports = router;