import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  pickupDateTime: {
    type: Date,
    required: true
  },
  pickupLocation: {
    type: String,
    required: true
  },
  contactInfo: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true,
    min: 1,
    max: 48
  },
  totalPrice: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;