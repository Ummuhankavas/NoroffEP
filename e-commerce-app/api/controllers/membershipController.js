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

const createMembership = async (req, res) => {
  try {
    const { name, min_items, max_items, discount } = req.body;
    const newMembership = await Membership.create({ name, min_items, max_items, discount });
    return res.status(201).json({ membership: newMembership });
  } catch (error) {
    console.error('Error creating membership:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const updateMembership = async (req, res) => {
  try {
    const membershipId = req.params.id;
    const { name, min_items, max_items, discount } = req.body;
    
    // Üyelik bilgisini veritabanında güncelle
    const updatedMembership = await Membership.update(
      { name, min_items, max_items, discount },
      { where: { id: membershipId } }
    );
    
    if (updatedMembership[0] === 1) {
      return res.status(200).json({ message: 'Membership updated successfully' });
    } else {
      return res.status(404).json({ error: 'Membership not found' });
    }
  } catch (error) {
    console.error('Error updating membership:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteMembership = async (req, res) => {
  try {
    const membershipId = req.params.id;
    
    // Üyeliği veritabanından sil
    const deletedMembershipCount = await Membership.destroy({ where: { id: membershipId } });
    
    if (deletedMembershipCount === 1) {
      return res.status(200).json({ message: 'Membership deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Membership not found' });
    }
  } catch (error) {
    console.error('Error deleting membership:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllMemberships,
  createMembership,
  updateMembership,
  deleteMembership
};
