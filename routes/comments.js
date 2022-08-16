const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments');
const isLoggedIn = require('../config/auth');


router.post('/artwork/:id/comments', commentController.addComment);
router.delete('/comments/:id', commentController.deleteComment);







module.exports = router;