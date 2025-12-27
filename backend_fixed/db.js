const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
