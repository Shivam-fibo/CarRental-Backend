import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name: String,
  brand: String,
  type: String,
  pricePerDay: Number,
  rating: Number,
  fuelType: String, 
  transmission: String 
});

const Car = mongoose.model('Car', carSchema);

export default Car;
