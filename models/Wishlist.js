import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

export default Wishlist;
