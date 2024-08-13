// models/Restaurant.js
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  googleRating: { type: Number, required: true },
  description: { type: String },
  photos: [{ url: String }],
  coupons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' }],
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
