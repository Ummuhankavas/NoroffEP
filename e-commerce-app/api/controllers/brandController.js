const { Brand } = require('../models');

// create new brand
const createBrand = async (req, res) => {
  try {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    res.status(201).json({ success: true, data: brand });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// get all brands
const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll();
    res.json({ success: true, data: brands });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// update brands
const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const brand = await Brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({ success: false, error: 'Brand not found' });
    }
    brand.name = name;
    await brand.save();
    res.json({ success: true, data: brand });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Delete brands
const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({ success: false, error: 'Brand not found' });
    }
    await brand.destroy();
    res.json({ success: true, message: 'Brand deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  createBrand,
  getAllBrands,
  updateBrand,
  deleteBrand
};
