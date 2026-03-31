const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Contact = require('./Models/Contact'); // Aapka model
const Subscriber = require('./Models/Subscriber');

const app = express();

// Middleware
app.use(express.json()); // JSON data handle karne ke liye
app.use(cors());         // Frontend se connection allow karne ke liye

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// --- CONTACT FORM ROUTE ---
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, category } = req.body;

    // Basic Validation
    if (!name || !email || !message || !category) {
      return res.status(400).json({ error: "Please fill all fields, including the dropdown!" });
    }

    const newContact = new Contact({
      name,
      email,
      message,
      category
    });

    await newContact.save();
    res.status(201).json({ message: "Data saved to MongoDB successfully!" });

  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    const newSub = new Subscriber({ email });
    await newSub.save();
    res.status(201).json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: "Already subscribed!" });
    }
    res.status(500).json({ success: false, message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));