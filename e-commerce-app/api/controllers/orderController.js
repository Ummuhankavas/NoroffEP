const Order = require('../models/Order');

// Tüm siparişleri getirme
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Sipariş durumunu güncelleme
const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const { status } = req.body;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }
    await order.update({ status });
    res.json({ success: true, data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllOrders,
  updateOrderStatus
};
