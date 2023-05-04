const express = require("express");
const router = express.Router();

const { user } = require('../controllers')

router.post("/", user.register);
router.get("/", user.getAllUsers);
router.delete("/", user.deleteAllUsers);

router.get("/:userId", user.getUserById);
router.put("/:userId", user.updateUserById);
router.delete("/:userId", user.deleteUserById);

router.post("/:userId/posts", user.createPost);
router.get("/:userId/posts", user.getAllPosts);
router.delete("/:userId/posts", user.deleteAllPosts);

router.get("/:userId/posts/:postId", user.getPostById);
router.put("/:userId/posts/:postId", user.udpadePostById);
router.delete("/:userId/posts/:postId", user.deletePostById);

router.post("/:userId/comments", user.createComment);
router.get("/:userId/comments", user.getAllComments);
router.delete("/:userId/comments", user.deleteAllComments);

router.get("/:userId/comments/:commentId", user.getCommentById);
router.put("/:userId/comments/:commentId", user.updateCommentById);
router.delete("/:userId/comments/:commentId", user.deleteCommentById);

module.exports = router;
