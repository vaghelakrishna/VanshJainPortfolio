const mongoose = require('mongoose');
require('dotenv').config();

let isConnected = false;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState === 1) {
    return;
  }

  if (!process.env.MONGO_URI) {
    console.log('MongoDB skipped: MONGO_URI not configured');
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    isConnected = true;
  } catch (error) {
    // In serverless environments (like Vercel), do not terminate the process.
    // Keep API routes alive even when Mongo is unavailable.
    console.error(`MongoDB connection failed: ${error.message}`);
  }
};

module.exports = connectDB;
