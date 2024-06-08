const Product = require('../models/Product');

// create new product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, quantity, image } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      quantity,
      image
    });
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// get all prodcts
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({ success: true, data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// uppdate product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, description, price, quantity, image } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    await product.update({
      name,
      description,
      price,
      quantity,
      image
    });
    res.json({ success: true, data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    await product.destroy();
    res.json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
};
