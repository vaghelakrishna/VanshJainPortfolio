const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true
  },
  courseName: {
    type: String,
    required: [true, "Please select a course"]
  },
  status: {
    type: String,
    default: "Pending" 
  },
  enrolledAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);