const Membership = require('../models/Membership');

// GetAllMemebership
const getAllMemberships = async (req, res) => {
  try {
    const memberships = await Membership.findAll();
    res.json({ success: true, data: memberships });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Create Memmebership
const createMembership = async (req, res) => {
  const { name, min_items, max_items, discount } = req.body;
  try {
    const membership = await Membership.create({ name, min_items, max_items, discount });
    res.status(201).json({ success: true, data: membership });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// update
const updateMembership = async (req, res) => {
  const { id } = req.params;
  const { name, min_items, max_items, discount } = req.body;
  try {
    const membership = await Membership.findByPk(id);
    if (!membership) {
      return res.status(404).json({ success: false, error: 'Membership not found' });
    }
    await membership.update({ name, min_items, max_items, discount });
    res.json({ success: true, data: membership });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// delete
const deleteMembership = async (req, res) => {
  const { id } = req.params;
  try {
    const membership = await Membership.findByPk(id);
    if (!membership) {
      return res.status(404).json({ success: false, error: 'Membership not found' });
    }
    await membership.destroy();
    res.json({ success: true, message: 'Membership deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllMemberships,
  createMembership,
  updateMembership,
  deleteMembership
};
