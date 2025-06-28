import express from 'express';
import { createBooking, getUserBookings } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking);     
router.get('/', getUserBookings);    

export default router;
