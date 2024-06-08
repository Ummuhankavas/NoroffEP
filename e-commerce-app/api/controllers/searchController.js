const { sequelize } = require('../models');

const searchProducts = async (req, res) => {
  try {
    const { keyword, category, brand } = req.body;

    // Build the SQL query dynamically based on the search parameters
    let query = 'SELECT * FROM Products WHERE ';
    const queryParams = [];

    if (keyword) {
      queryParams.push(`name LIKE '%${keyword}%'`);
    }
    if (category) {
      queryParams.push(`categoryId IN (SELECT id FROM Categories WHERE name = '${category}')`);
    }
    if (brand) {
      queryParams.push(`brandId IN (SELECT id FROM Brands WHERE name = '${brand}')`);
    }

    // Add search conditions to the query
    query += queryParams.join(' AND ');

    // Execute the raw SQL query
    const results = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });

    return res.status(200).json({ count: results.length, results });
  } catch (error) {
    console.error('Error searching products:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { searchProducts };
