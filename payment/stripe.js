const express = require("express");
const router = express.Router();


require('dotenv').config(); // Load environment variables from .env file

const stripe = require('stripe')(process.env.STRIPE_TEST_API_KEY);

const app = express();
app.use(express.static('public'));

router.post('/create-checkout-session', async (req, res) => {
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.cartQuantity || 1,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: 'payment',
    success_url: process.env.REACT_APP_SUCCESS,
    cancel_url: process.env.REACT_APP_FAIL,
  });

  res.send({ url: session.url });
});






module.exports = router;
