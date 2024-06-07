module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'products',
    });
  
    return Product;
  };