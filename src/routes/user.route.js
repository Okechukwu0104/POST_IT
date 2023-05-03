const express = require("express");
const router = express.Router();
const { user } = require('../controllers')

router.post("/users", user.register);
router.get("/users", user.getAllUsers);
router.delete("/users", user.deleteAllUsers);

router.get("/users/:userId", user.getUserById);
router.put("/users/:userId", user.updateUserById);
router.delete("/users/:userId", user.deleteUserById);

router.post("/users/:userId/posts", user.createPost);
router.get("/users/:userId/posts", user.getAllPosts);
router.delete("/users/:userId/posts", user.deleteAllPosts);

router.get("/users/:userId/posts/:postId", user.getPostById);
router.put("/users/:userId/posts/:postId", user.udpadePostById);
router.delete("/users/:userId/posts/:postId", user.deletePostById);

router.post("/users/:userId/comments", user.createComment);
router.get("/users/:userId/comments", user.getAllComments);
router.delete("/users/:userId/comments", user.deleteAllComments);

router.get("/users/:userId/comments/:commentId", user.getCommentById);
router.put("/users/:userId/comments/:commentId", user.updateCommentById);
router.delete("/users/:userId/comments/:commentId", user.deleteCommentById);


module.exports = router;
