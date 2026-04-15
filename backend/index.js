const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
<<<<<<< HEAD
const Enrollment = require('./Models/Enrollment');
const Subscriber = require('./Models/Subscriber');
const Contact = require('./Models/Contact');
=======
const { GOOGLE_SCRIPT_URL, sendToGoogleSheet } = require('./services/googleSheets');
>>>>>>> 011d5f3826b377a046e3908524f0afad5e5ff7b7

const app = express();

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

// Middleware
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  },
}));
app.use(express.json());

// Connect Database
connectDB();

// --- ROUTES ---

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    sheetsEnabled: Boolean(GOOGLE_SCRIPT_URL),
    mongoEnabled: Boolean(process.env.MONGO_URI),
    timestamp: new Date().toISOString(),
  });
});

// 1. Course Enrollment Route
app.post('/api/enroll', async (req, res) => {
  try {
    const { name, phone, email, courseName } = req.body;

    if (!name || !phone || !email || !courseName) {
      return res.status(400).json({ success: false, message: "Please fill all fields" });
    }

    await sendToGoogleSheet('enrollment', { name, phone, email, courseName });

    res.status(201).json({ success: true, message: "Enrollment Successful!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Server Error" });
  }
});

// 2. Newsletter Subscription Route
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    await sendToGoogleSheet('subscriber', { email });

    res.status(201).json({ success: true, message: "Subscribed Successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Server Error" });
  }
});
// 3. Contact Inquiry Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, category, message } = req.body;

    if (!name || !email || !category || !message) {
      return res.status(400).json({ success: false, error: 'Please fill all fields' });
    }

    const allowedCategories = ['speaking', 'mentorship', 'internship', 'course', 'media', 'collaboration', 'other'];
    if (!allowedCategories.includes(category)) {
      return res.status(400).json({ success: false, error: 'Invalid category' });
    }

    await sendToGoogleSheet('contact', { name, email, category, message });

    res.status(201).json({ success: true, message: 'Inquiry submitted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message || 'Server Error' });
  }
});

<<<<<<< HEAD
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
=======
module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
>>>>>>> 011d5f3826b377a046e3908524f0afad5e5ff7b7
