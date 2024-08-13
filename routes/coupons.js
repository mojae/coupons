// routes/coupons.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const {
  getCoupons,
  createCoupon,
  updateCoupon,
} = require('../controllers/couponController');

const router = express.Router();

// @route   GET /api/coupons
// @desc    Get all coupons
router.get('/', getCoupons);

// @route   POST /api/coupons
// @desc    Create a new coupon
router.post('/', authMiddleware, createCoupon);

// @route   PUT /api/coupons/:id
// @desc    Update coupon
router.put('/:id', authMiddleware, updateCoupon);

module.exports = router;
