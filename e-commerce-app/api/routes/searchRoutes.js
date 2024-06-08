const express = require('express');
const router = express.Router();
const { searchProducts } = require('../controllers/searchController');

router.post('/', searchProducts);

module.exports = router;
