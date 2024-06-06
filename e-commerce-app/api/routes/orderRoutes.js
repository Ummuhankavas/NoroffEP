const express = require('express');
const { getAllOrders, updateOrderStatus } = require('../controllers/orderController');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.get('/', authenticate, getAllOrders);
router.put('/:id/status', authenticate, authorize(['admin']), updateOrderStatus);

module.exports = router;
