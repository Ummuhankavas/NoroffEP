'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    cartId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Carts', key: 'id' } },
    productId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Products', key: 'id' } },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    unitPrice: { type: DataTypes.FLOAT, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {});
  CartItem.associate = function(models) {
    CartItem.belongsTo(models.Cart);
    CartItem.belongsTo(models.Product);
  };
  return CartItem;
};
