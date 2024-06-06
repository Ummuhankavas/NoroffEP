const express = require('express');
const { getAllUsers, updateUser } = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

const router = express.Router();

router.get('/', authenticate, authorize(['admin']), getAllUsers);
router.put('/:id', authenticate, authorize(['admin']), updateUser);

module.exports = router;
