
const { Cart, Product } = require('../models');

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    if (product.quantity < quantity) {
      return res.status(400).json({ error: 'Not enough product in stock' });
    }

    const cartItem = await Cart.findOne({
      where: { userId, productId, checkedOut: false }
    });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      await Cart.create({
        userId,
        productId,
        quantity,
        unitPrice: product.price
      });
    }

    return res.status(201).json({ message: 'Product added to cart' });
  } catch (error) {
    console.error('Error adding to cart:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getCartItems = async (req, res) => {
  try {
    const userId = req.user.id;
    const cartItems = await Cart.findAll({
      where: { userId, checkedOut: false },
      include: [{ model: Product }]
    });

    return res.status(200).json({ cartItems });
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const checkoutCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cartItems = await Cart.findAll({
      where: { userId, checkedOut: false },
      include: [{ model: Product }]
    });

    if (cartItems.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    for (const item of cartItems) {
      item.checkedOut = true;
      await item.save();

      const product = await Product.findByPk(item.productId);
      product.quantity -= item.quantity;
      await product.save();
    }

    return res.status(200).json({ message: 'Cart checked out successfully' });
  } catch (error) {
    console.error('Error checking out cart:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addToCart,
  getCartItems,
  checkoutCart
};
