// routes/restaurants.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const {
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
} = require('../controllers/restaurantController');

const router = express.Router();

// @route   GET /api/restaurants
// @desc    Get all restaurants
router.get('/', getRestaurants);

// @route   GET /api/restaurants/:id
// @desc    Get restaurant by ID
router.get('/:id', getRestaurantById);

// @route   PUT /api/restaurants/:id
// @desc    Update restaurant
router.put('/:id', authMiddleware, updateRestaurant);

module.exports = router;
