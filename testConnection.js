import mongoose from 'mongoose';

const uri = "mongodb+srv://CarRental:CarRental@cluster0.ee0gc8z.mongodb.net/CarRental?retryWrites=true&w=majority";

async function test() {
  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected successfully');
    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
  }
}

test();
