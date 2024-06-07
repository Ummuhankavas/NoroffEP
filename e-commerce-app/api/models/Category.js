'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'categories',
  });
  Category.associate = function(models) {
    Category.hasMany(models.Product);
  };
  return Category;
};
