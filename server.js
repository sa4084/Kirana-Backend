const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require('cors');
// Import routes
const productRoutes = require('./products/productRoutes');
const profileRoutes = require('./profile/profileRoutes');
const stripe = require('./payment/stripe');
const order = require('./orders/orderRoutes');
require('dotenv').config(); 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_STR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(express.json());

// Use product routes
app.use('/products', productRoutes);

// Use profile routes
app.use('/profile', profileRoutes);

// use stripe
app.use('/payment', stripe);

// use orders
app.use('/orders', order);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
