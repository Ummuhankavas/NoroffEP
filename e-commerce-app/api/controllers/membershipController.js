const { Membership } = require('../models');

const getAllMemberships = async (req, res) => {
  try {
    const memberships = await Membership.findAll();
    return res.status(200).json({ memberships });
  } catch (error) {
    console.error('Error fetching memberships:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createMembership = async (req, res) => {
  try {
    const { name, min_items, max_items, discount } = req.body;
    const newMembership = await Membership.create({ name, min_items, max_items, discount });
    return res.status(201).json({ membership: newMembership });
  } catch (error) {
    console.error('Error creating membership:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllMemberships,
  createMembership
};
