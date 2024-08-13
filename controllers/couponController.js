// controllers/couponController.js
const Coupon = require('../models/Coupon');

exports.getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find().populate('restaurant');
    res.json(coupons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createCoupon = async (req, res) => {
  const { code, startDate, endDate, discount, restaurant } = req.body;

  try {
    const newCoupon = new Coupon({
      code,
      startDate,
      endDate,
      discount,
      restaurant,
    });

    const coupon = await newCoupon.save();
    res.json(coupon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateCoupon = async (req, res) => {
  const { code, startDate, endDate, discount } = req.body;

  try {
    let coupon = await Coupon.findById(req.params.id);
    if (!coupon) {
      return res.status(404).json({ msg: 'Coupon not found' });
    }

    coupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      { code, startDate, endDate, discount },
      { new: true }
    );

    res.json(coupon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
