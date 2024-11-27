const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // To load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to handle CORS
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Sample Route for Testing
app.get('/api/menu', (req, res) => {
  res.json({
    message: 'Welcome to the Cafe Menu API!',
    menu: [
      { item: 'Coffee', price: '$3' },
      { item: 'Tea', price: '$2' },
      { item: 'Sandwich', price: '$5' },
      { item: 'Cake', price: '$4' }
    ]
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
