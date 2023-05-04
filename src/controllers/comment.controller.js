const { User, Post, Comment } = require("../models");
const { updateMany } = require("../models/comment.model");
const { findById } = require("../models/comment.model");

const createComment = async function (req, res) {
  try {
    const newComment = {
      content: req.body.content,
      author: req.body.author,
      post: req.body.post,
    };
    const comment = new Comment(newComment);
    await comment.save();

    return res.status(201).json({
      success: true,
      Comment: Comment,
    });
  } catch (error) {
    throw new Error(`Error creating comment: ${error.message}`);
  }
};

const getAllComments = async function (req, res) {
  try {
    const allComments = await Post.find({});
    return res.status(200).json({
      success: true,
      allComments: allComments,
    });
  } catch (error) {
    throw new Error(`Error getting all comments: ${error.message}`);
  }
};

const deleteAllComments = async function (req, res) {
  try {
    const deleteAllComments = await Comment.deleteMany({});
    return res.status(200).json({
      success: true,
      deleteAllComments: deleteAllComments,
    });
  } catch (error) {
    throw new Error(`Error deleting all comments: ${error.message}`);
  }
};

const getCommentById = async function (req, res) {
  try {
    const commentId = req.params.commentId(commentId);
    const comment = await Comment.findById(comment);
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "cant find a comment like this",
      });
    }
    return res.status(200).json({
      success: true,
      comment,
    });
  } catch (error) {
    throw new Error(`Error getting comment by id: ${error.message}`);
  }
};

const updateComment = async function (req, res) {
  try {
    const commentId = req.params.commentId;
    const newUpdatedComment = await Comment.findByIdAndUpdate(
      commentId,
      updates,
      { new: true }
    );

    if (!newUpdatedComment) {
      return res.status(404).json({
        success: false,
        message: "No comment found",
      });
      res.send(newUpdatedComment);
    }
    return res.status(200).json({
      success: true,
      newUpdatedComment: newUpdatedComment,
    });
  } catch (error) {
    throw new Error(`Error updating comment by id: ${error.message}`);
  }
};
const deleteCommentById = async function (req, res) {
  try {
    const commentId = req.params.commentId;
    const comment = await Comment.findById(commentId);
    const deletedComment = await comment.deleteOne();
  } catch (error) {
    throw new Error(`Error deleting comment by id: ${error.message}`);
  }
};

module.exports = {
  createComment,
  getAllComments,
  deleteAllComments,
  getCommentById,
  updateComment,
  deleteCommentById,
};
