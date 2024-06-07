module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    tableName: 'brands'
  }, {});
  Brand.associate = function(models) {
    Brand.hasMany(models.Product);
  };
  return Brand;
};
