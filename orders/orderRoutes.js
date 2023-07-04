const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a new order
router.post('/', async (req, res) => {
    try {
      const { customerEmail, customerName, address, products, phoneNumber, totalPrice, timestamp, orderId } = req.body;
  
      // Check if the order ID already exists in the database
      const existingOrder = await Order.findOne({ orderId });
  
      if (existingOrder) {
        return res.status(400).json({ error: 'Order already exists' });
      }
  
      // Create a new order
      const order = new Order({
        customerEmail,
        customerName,
        address,
        products,
        phoneNumber,
        totalPrice,
        timestamp,
        orderId,
      });
  
      // Save the order to the database
      const savedOrder = await order.save();
  
      res.json(savedOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Get all orders by email ID
router.get('/:email', async (req, res) => {
  try {
    const { email } = req.params;

    // Find orders by email ID
    const orders = await Order.find({ customerEmail: email });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
