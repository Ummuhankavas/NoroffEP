const { Role, User, Membership } = require('../models');

const initDatabase = async (req, res) => {
  try {
    // Check if database is already populated
    const usersCount = await User.count();
    if (usersCount > 0) {
      return res.status(400).json({ error: 'Database is already populated' });
    }

    // Populate roles table
    await Role.bulkCreate([
      { id: 1, name: 'Admin' },
      { id: 2, name: 'User' }
    ]);

    // Create initial Admin user
    await User.create({
      firstname: 'Admin',
      lastname: 'Support',
      username: 'Admin',
      email: 'admin@noroff.no',
      password: 'P@ssword2023',
      address: 'Online',
      telephonenumber: '911',
      role: 1 // Admin role
    });

    // Populate membership table
    await Membership.bulkCreate([
      { name: 'Bronze', minQuantity: 0, maxQuantity: 0, discountPercentage: 0 },
      { name: 'Silver', minQuantity: 15, maxQuantity: 30, discountPercentage: 15 },
      { name: 'Gold', minQuantity: 30, maxQuantity: null, discountPercentage: 30 }
    ]);

    return res.status(200).json({ success: 'Database population completed successfully' });
  } catch (error) {
    console.error('Error initializing database:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { initDatabase };
