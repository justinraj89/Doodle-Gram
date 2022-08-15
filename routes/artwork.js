const express = require('express');
const router = express.Router();
const artworkController = require('../controllers/artwork');
const isLoggedIn = require('../config/auth');

router.get('/', artworkController.index);
router.get('/new', artworkController.new);
router.get('/:id', artworkController.show);


router.post('/', artworkController.create);
router.post('/:id/comments', artworkController.addComment);








module.exports = router;