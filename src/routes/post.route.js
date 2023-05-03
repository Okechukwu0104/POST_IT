const express = require("express");
const router = express.Router();

// Assuming there is a database module that provides access to the database
const db = require("../database");

// Get all creat a post
router.get("/posts/", async (req, res,) => {
  try {
    const postId = req.params.postId;
    const  = await db.getpostsByPostId(postId);
    // Filter out deleted comments
    const filteredComments = comments.filter((comment) => !comment.deleted);
    res.json(filteredComments);
  } catch (err) {
    next(err);
  }
});
