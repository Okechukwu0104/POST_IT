const { User, Post, Comment } = require('../models');

const register = async function (req, res) {
  try {

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

  } catch (error) {
    throw new Error(`Error creating a comment: ${error.message}`);
  }
};

const getAllComments = async function (req, res) {
  try {

  } catch (error) {
    throw new Error(`Error getting all comments: ${error.message}`);
  }
};

const deleteAllComments = async function (req, res) {
  try {

  } catch (error) {
    throw new Error(`Error deleting all comments: ${error.message}`);
  }
};

const getCommentById = async function (req, res) {
  try {

  } catch (error) {
    throw new Error(`Error getting comment by id: ${error.message}`);
  }
};

const updateCommentById = async function (req, res) {
  try {

  } catch (error) {
    throw new Error(`Error updating comment by id: ${error.message}`);
  }
};

const deleteCommentById = async function (req, res) {
  try {

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