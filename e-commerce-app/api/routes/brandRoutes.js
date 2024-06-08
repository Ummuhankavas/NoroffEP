const express = require('express');
const router = express.Router();
const { createBrand, getAllBrands, updateBrand, deleteBrand } = require('../controllers/brandController');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

router.post('/', authenticate, authorize(['admin']), createBrand);
router.get('/', getAllBrands);
router.put('/:id', authenticate, authorize(['admin']), updateBrand);
router.delete('/:id', authenticate, authorize(['admin']), deleteBrand);

module.exports = router;
