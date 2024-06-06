const express = require('express');
const { addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { authenticate, isAdmin } = require('../middlewares/authenticate');
const router = express.Router();

router.post('/', authenticate, isAdmin, addProduct);
router.put('/:id', authenticate, isAdmin, updateProduct);
router.delete('/:id', authenticate, isAdmin, deleteProduct);

module.exports = router;
