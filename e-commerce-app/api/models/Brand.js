// models/brand.js

module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define('Brand', {
      name: DataTypes.STRING,
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'brands',
    });
    
    return Brand;
  };
  