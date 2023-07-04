const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
require('dotenv').config(); 

// Get all products with pagination and search by name
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Current page number
  const limit = parseInt(req.query.limit) || 9; // Number of products per page
  const searchTerm = req.query.search; // Search term for name field

  try {
    // Build the query for search and pagination
    const query = {};

    // Add the search condition if a search term is provided
    if (searchTerm) {
      query.name = { $regex: searchTerm, $options: 'i' };
    }

    const count = await Product.countDocuments(query); // Total number of products
    const totalPages = Math.ceil(count / limit); // Total number of pages
    const skip = (page - 1) * limit; // Number of products to skip

    const products = await Product.find(query)
      .skip(skip)
      .limit(limit);

    res.json({ products, totalPages, currentPage: page });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Create a new product
router.post('/', async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    const product = new Product({
      name,
      price,
      description,
      image,
    });

    // Save the product to the database
    const newProduct = await product.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a product
router.put('/:id', async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        description,
        image,
      },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
