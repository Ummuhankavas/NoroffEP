
const { Order, OrderItem, Product, User } = require('../models');

const getAllOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const isAdmin = req.user.role === 'admin';

    let orders;
    if (isAdmin) {
      orders = await Order.findAll({ include: [User, { model: OrderItem, include: [Product] }] });
    } else {
      orders = await Order.findAll({
        where: { userId },
        include: [{ model: OrderItem, include: [Product] }]
      });
    }

    return res.status(200).json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.status = status;
    await order.save();

    return res.status(200).json({ message: 'Order status updated', order });
  } catch (error) {
    console.error('Error updating order status:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllOrders,
  updateOrderStatus
};
