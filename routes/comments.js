const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments');
const isLoggedIn = require('../config/auth');


router.post('/:id/comments', commentController.addComment);



module.exports = router;