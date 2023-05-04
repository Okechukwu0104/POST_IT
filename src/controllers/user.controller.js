
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
}

const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password
    } = req.body;
    console.log(req.body);
    if (!name) {
      return res.status(400).json({
        status: 'error',
        error: 'name is required'
      });
    }
    if (!email) {
      return res.status(400).json({
        status: 'error',
        error: 'email is required'
      });
    }
    if (!password) {
      return res.status(400).json({
        status: 'error',
        error: 'password is required'
      });
    }
    // hash the password
    const hashedPassword = await hashPassword(password);
    // create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });
    // SIGN TOKEN
    const token = signToken({
      id: user._id,
      email: user.email
    });


    // save the user
    await user.save();
    // send the response
    res.status(201).json({
      status: 'success',
      data: {
        user,
        token
      }
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// the login function
exports.login = async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body;
    // find the user by email
    const user = await User.findOne({
      email
    });
    // if the user is not found
    if (!user) {
      return res.status(404).json({
        status: 'error',
        error: 'User not found'
      });
    }
    // verify the password
    const isMatch = await verifyPassword(password, user.password);
    // if the password is not correct
    if (!isMatch) {
      return res.status(401).json({
        status: 'error',
        error: 'Incorrect password'
      });
    }
    // if the password is correct
    // create a token
    const token = signToken({
      id: user._id,
      email: user.email
    });
    // send the response
    res.status(200).json({
      status: 'success',
      data: {
        token,
        user
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message
    });
  }
};

// user profile
exports.getuserProfile = async (req, res) => {
  res.send(req.user);
};
//update user profile 
exports.updateProfile = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id, // user ID to update
      { name, email }, // updated name and email
      { new: true } // return the updated user object
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// reset password 
exports.resetPassword = async (req, res) => {
  const userId = req.params.id;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  try {
    // Find user by ID
    const user = await User.findById(userId);

    // Compare old password with stored hashed password
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid old password' });
    }

    // Hash and save new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated succesfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' })
  }

};