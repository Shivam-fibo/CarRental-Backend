import Booking from '../models/Booking.js';
import Car from '../models/Car.js';

// POST /api/bookingsexport 
export const createBooking = async (req, res) => {
  try {
    console.log("Start of createBooking function");
    console.log("Request body:", req.body);

    const { carId, userId, pickupDateTime, pickupLocation, contactInfo, hours } = req.body;


    const car = await Car.findById(carId);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    console.log("Car fetched from database:", car);

    
    const totalPrice = car.pricePerDay * parseInt(hours);
    console.log("Total price calculated:", totalPrice);

    const booking = new Booking({
      carId,
      userId,
      pickupDateTime: new Date(pickupDateTime),
      pickupLocation,
      contactInfo,
      hours: parseInt(hours),
      totalPrice
    });

    console.log("Booking object created:", booking);
    
    await booking.save();
    
    const populatedBooking = await Booking.findById(booking._id).populate('carId');
    
    res.status(201).json({ 
      message: 'Booking created successfully', 
      booking: populatedBooking 
    });
  } catch (err) {
    console.error("Error occurred while creating booking:", err.message);
    res.status(500).json({ 
      message: 'Error creating booking', 
      error: err.message 
    });
  }
};

// GET /api/bookings/:userId
export const getUserBookings = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const bookings = await Booking.find({ userId })
      .populate('carId')
      .sort({ pickupDateTime: -1 });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ 
      message: 'Error fetching bookings', 
      error: err.message 
    });
  }
};