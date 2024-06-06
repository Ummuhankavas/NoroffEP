module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      order_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('pending', 'processing', 'completed', 'cancelled'),
        defaultValue: 'pending'
      },
      shipping_address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      payment_status: {
        type: DataTypes.ENUM('unpaid', 'paid', 'cancelled'),
        defaultValue: 'unpaid'
      },
      delivery_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'orders',
    });
  
    return Order;
  };
  