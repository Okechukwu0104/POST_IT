const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const {resetPassword} = require ('../controllers/user.controller')

// router.post("/users")
// router.get("/users")
// router.delete("/users")

// router.get("/users/:id")
// router.put("/users/:id")
// router.delete("/users/:id")

// router.post("/users/:id/posts")
// router.get("/users/:id/posts")
// router.delete("/users/:id/posts")

// router.get("/users/:userId/posts/:postId")
// router.put("/users/:userId/posts/:postId")
// router.delete("/users/:userId/posts/:postId")

// router.post("/users/:userId/comments")
// router.get("/users/:userId/comments")
// router.delete("/users/:userId/comments")

// router.get("/users/:userId/comments/:commentId")
// router.put("/users/:userId/comments/:commentId")
// router.delete("/users/:userId/comments/:commentId")

router.post("/User", async (req, res) => {
  try {
    const savedUser = await user.save();
    res.send(saveduser)

    const newUser = {
      username: req.body.username,
      firstname: req.body.firstname,
      email: req.body.email,
      password: req.body.password
    };

    const user = new User(newUser);
    awaituser.save();

    return res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    throw new error(`error creating a user ${error.message}`);
  }
});

// register a new user.
router.post("/Register", async (req, res) => {
  try {
    const user = new user(req.body);
    await user.save();
    res.redirect('login');
  } catch (error) {
    throw new error(`error registering new user ${error.message}`);
  }
});

// User Login.
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.authenticate(email, password);
    req.session.userId = user_id;
    res.redirect('profile');
  } catch (error) {
    throw new error(`invalid email or password ${error.message}`);
  }
});

// User Profile
router.get('/profile', async (req, res) => {
  res.render('profile');
});

// Update user profile.
router.post("/profile", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.session.userId,
      req.body,
      { new: true }
    );
    res.redirect('profile');
  } catch (error) {
    throw new error(`error updating user profile ${error.message}`);
  }
});

//  password reset
router.post("/reset-password", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
  } catch (error) {
    throw new error(`error updating user profile ${error.message}`);
  }
});

module.exports = router;
