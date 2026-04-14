const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Enrollment = require('./Models/Enrollment');
const Subscriber = require('./Models/Subscriber');
const Contact = require('./Models/Contact');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// --- ROUTES ---

// 1. Course Enrollment Route
app.post('/api/enroll', async (req, res) => {
  try {
    const { name, phone, email, courseName } = req.body;

    if (!name || !phone || !email || !courseName) {
      return res.status(400).json({ success: false, message: "Please fill all fields" });
    }

    const newEnrollment = new Enrollment({ name, phone, email, courseName });
    await newEnrollment.save();

    res.status(201).json({ success: true, message: "Enrollment Successful!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// 2. Newsletter Subscription Route
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: "Already Subscribed!" });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ success: true, message: "Subscribed Successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// 3. Contact Form Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, category, message } = req.body;

    if (!name || !email || !category || !message) {
      return res.status(400).json({ success: false, error: "Please fill all fields." });
    }

    const newContact = new Contact({ name, email, category, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Contact request submitted successfully." });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));