const Category = require('../models').Category;

// Get All Categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json({ success: true, data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Create
const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Update
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }
    await category.update({ name });
    res.json({ success: true, data: category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Delete
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }
    await category.destroy();
    res.json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
};
