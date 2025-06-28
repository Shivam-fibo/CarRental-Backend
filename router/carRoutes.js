import express from 'express';
import { getAllCars, getCarById, addCar } from "../controllers/carController.js"

const router = express.Router();

router.get('/', getAllCars); 
router.post('/', addCar);        
router.get('/:id', getCarById);     

export default router;
