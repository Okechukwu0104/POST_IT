const { User, Post, Comment } = require("../models");

const register = async function (req, res) {
  try {
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    const user = new User(newUser);
    await user.save();

    return res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    throw new Error(`Error registering a user: ${error.message}`);
  }
};

const getAllUsers = async function (req, res) {
  try {
  } catch (error) {
    throw new Error(`Error getting all users: ${error.message}`);
  }
};

const deleteAllUsers = async function (req, res) {
  try {
  } catch (error) {
    throw new Error(`Error deleting all users: ${error.message}`);
  }
};

const getUserById = async function (req, res) {
  try {
  } catch (error) {
    throw new Error(`Error getting a user by id: ${error.message}`);
  }
};

const updateUserById = async function (req, res) {
  try {
  } catch (error) {
    throw new Error(`Error updating a user by id: ${error.message}`);
  }
};

const deleteUserById = async function (req, res) {
  try {
  } catch (error) {
    throw new Error(`Error deleting a user by id: ${error.message}`);
  }
};

const createPost = async function (req, res) {
  try {
  } catch (error) {
    throw new Error(`Error creating a post: ${error.message}`);
  }
};

const getAllPosts = async function (req, res) {
  try {
  } catch (error) {
    throw new Error(`Error getting all posts: ${error.message}`);
  }
};

const deleteAllPosts = async function (req, res) {
  try {
  } catch (error) {
    throw new Error(`Error deleting all posts: ${error.message}`);
  }
};

const getPostById = async function (req, res) {
  try {
  } catch (error) {
    throw new Error(`Error getting post by id: ${error.message}`);
  }
};

const udpadePostById = async function (req, res) {
  try {
  } catch (error) {
    throw new Error(`Error updating post by id: ${error.message}`);
  }
};

const deletePostById = async function (req, res) {
  try {
  } catch (error) {
    throw new Error(`Error deleting post by id: ${error.message}`);
  }
};

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
    throw new Error(`Error creating a comment: ${error.message}`);
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

const updateCommentById = async function (req, res) {
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
  register,
  getAllUsers,
  deleteAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createPost,
  getAllPosts,
  deleteAllPosts,
  getPostById,
  udpadePostById,
  deletePostById,
  createComment,
  getAllComments,
  deleteAllComments,
  getCommentById,
  updateCommentById,
  deleteCommentById,
};
