module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'carts',
    });
  
    return Cart;
  };