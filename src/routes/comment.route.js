const express = require("express");
const router = express.Router();
const { comment } = require('../controllers')

router.post('/comments', comment.createComment)
router.get('/comments', comment.getAllComments)
router.delete('/comments', comment.deleteAllComments)
router.get('/comments/:commentId', comment.getCommentById)
router.put('/comments/:commentId', comment.updateComment)
router.delete('/comments/:commentId', comment.deleteCommentById)

module.exports = router;
