const Cart = require('../models').Cart;

// add items
const addToCart = async (req, res) => {
  const { image, description, quantity, price } = req.body;
  try {
    const cartItem = await Cart.create({ image, description, quantity, price });
    res.status(201).json({ success: true, data: cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// get cart items
const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.findAll();
    res.json({ success: true, data: cartItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const checkoutCart = async (req, res) => {
  try {
    const productIds = req.body.productIds; 

  //  delete.. 
    await Cart.destroy({ where: { id: productIds } }); 

    res.json({ success: true, message: 'Selected products removed from cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


module.exports = {
  addToCart,
  getCartItems,
  checkoutCart
};
