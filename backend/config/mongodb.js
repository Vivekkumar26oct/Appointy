// config/mongodb.js (or similar file)

import mongoose from 'mongoose'; // or require

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // Use the variable here
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error}`);
    process.exit(1);
  }
};

export default connectDB; // or module.exports
