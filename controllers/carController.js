import Car from '../models/Car.js';

export const addCar = async (req, res) => {
  try {
    const {
      name,
      brand,
      type,
      pricePerDay,
      rating,
      fuelType,
      transmission
    } = req.body;

    const newCar = new Car({
      name,
      brand,
      type,
      pricePerDay,
      rating,
      fuelType,
      transmission
    });

    await newCar.save();
    res.status(201).json({ message: 'Car added successfully', car: newCar });
  } catch (err) {
    res.status(500).json({ message: 'Error adding car', error: err });
  }
};


export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cars', error: err });
  }
};


// GET /api/cars/:id
export const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching car', error: err });
  }
};
