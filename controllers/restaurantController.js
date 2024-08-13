// controllers/restaurantController.js
const Restaurant = require('../models/Restaurant');

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate('coupons');
    res.json(restaurants);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).populate('coupons');
    if (!restaurant) {
      return res.status(404).json({ msg: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateRestaurant = async (req, res) => {
  const { name, address, googleRating, description, photos } = req.body;

  try {
    let restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ msg: 'Restaurant not found' });
    }

    restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { name, address, googleRating, description, photos },
      { new: true }
    );

    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
