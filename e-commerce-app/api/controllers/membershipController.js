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

module.exports = {
  getAllMemberships
};
