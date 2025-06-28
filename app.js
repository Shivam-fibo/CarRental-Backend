import express from 'express';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import carRoutes from './router/carRoutes.js';
import bookingRoutes from './router/bookingRoutes.js';
import wishlistRoutes from './router/wishlistRoutes.js';
import cors from 'cors'

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors())



await connectDB()


app.use('/api/cars', carRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/wishlist', wishlistRoutes); 


app.get('/car', (req, res) => {
  res.send('Car Rental API is running');
});





export default app