import express from 'express';
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist
} from '../controllers/wishlistController.js';

const router = express.Router();

router.post('/', addToWishlist);                   
router.get('/', getWishlist);                     
router.delete('/:carId', removeFromWishlist);     

export default router;
