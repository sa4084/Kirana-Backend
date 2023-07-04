const axios = require('axios');
const mongoose = require('mongoose');


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    fetchAndStoreProducts();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Product Model
const Product = require('./models/Product'); // Assuming you have the Product model defined

// Fetch and store product data
async function fetchAndStoreProducts() {
  try {
    // Make a request to the Open Food Facts API to get product data
    const response = await axios.get('https://world.openfoodfacts.org/cgi/search.pl', {
      params: {
        action: 'process',
        json: 1,
        fields: 'product_name,price,image_url,ingredients_text',
        page_size: 18, // Retrieve 20 products
        // Add any additional parameters as needed, such as category or brand filters
      },
    });

    // Extract the product data from the response
    const products = response.data.products;

    // Process the products and store them in the database
    for (const productData of products) {
      const { product_name, price, image_url, ingredients_text } = productData;

      const product = new Product({
        name: product_name,
        price: Math.floor(Math.random() * 100) + 1,
        description: ingredients_text,
        image: image_url,
      });

      try {
        // Save the product to the database
        const savedProduct = await product.save();
        console.log('Product saved:', savedProduct);
      } catch (error) {
        console.error('Error saving product:', error);
      }
    }
  } catch (error) {
    console.error('Error fetching product data:', error);
  } finally {
    // Close the MongoDB connection after all products have been saved
    mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  }
}
