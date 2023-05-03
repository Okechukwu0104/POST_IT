const express = require('express');
const router = express.Router();
const {post} = require('../controllers')

router.post('/posts', post.createPost)
router.get('/posts', post.getAllPosts)
router.delete('/posts', post.deleteAllPosts)

router.get('/posts/:postId', post.getPostById)
router.put('/posts/:postId', post.updatePostById)
router.delete('/posts/:postId', post.deletePostById)

router.post('/posts/:postId/comments', post.createComment)
router.get('/posts/:postId/comments', post.getAllComments)
router.delete('/posts/:postId/comments', post.deleteAllComments)

router.get('/posts/:postId/comments/:commentId', post.getCommentById)
router.put('/posts/:postId/comments/:commentId', post.updateCommentById)
router.delete('/posts/:postId/comments/:commentId', post.deleteCommentById)

module.exports = router;