// routes/auth.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// @route   POST /api/auth/signup
// @desc    Register a user
router.post('/signup', registerUser);

// @route   POST /api/auth/login
// @desc    Authenticate a user and get token
router.post('/login', loginUser);

module.exports = router;
