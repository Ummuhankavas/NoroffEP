const express = require('express');
const { createCategory, getAllCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.post('/', authenticate, authorize(['admin']), createCategory);
router.get('/', getAllCategories);
router.put('/:id', authenticate, authorize(['admin']), updateCategory);
router.delete('/:id', authenticate, authorize(['admin']), deleteCategory);

module.exports = router;
