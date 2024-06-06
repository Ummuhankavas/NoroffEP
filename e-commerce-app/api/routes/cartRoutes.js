
const express = require('express');
const { addToCart, getCartItems, checkoutCart } = require('../controllers/cartController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/', authenticate, addToCart);
router.get('/', authenticate, getCartItems);
router.post('/checkout', authenticate, checkoutCart);

module.exports = router;
