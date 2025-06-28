import Wishlist from '../models/Wishlist.js';

// POST /api/wishlist
export const addToWishlist = async (req, res) => {
  try {
    const { carId } = req.body;
    const existing = await Wishlist.findOne({ carId });
    if (existing) return res.status(400).json({ message: 'Car already in wishlist' });

    const wishlist = new Wishlist({ carId });
    await wishlist.save();
    res.status(201).json({ message: 'Added to wishlist', wishlist });
  } catch (err) {
    res.status(500).json({ message: 'Error adding to wishlist', error: err });
  }
};

export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find().populate('carId');
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching wishlist', error: err });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    await Wishlist.findOneAndDelete({ carId: req.params.carId });
    res.json({ message: 'Removed from wishlist' });
  } catch (err) {
    res.status(500).json({ message: 'Error removing from wishlist', error: err });
  }
};
