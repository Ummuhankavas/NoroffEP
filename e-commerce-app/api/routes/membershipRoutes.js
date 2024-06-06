// membershipRoutes.js

const express = require('express');
const router = express.Router();
const { getAllMemberships, createMembership, updateMembership, deleteMembership } = require('../controllers/membershipController');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

router.get('/', authenticate, authorize(['admin', 'user']), getAllMemberships);

router.post('/add', authenticate, authorize(['admin']), createMembership);

router.put('/:id', authenticate, authorize(['admin']), updateMembership);

router.delete('/:id', authenticate, authorize(['admin']), deleteMembership);

module.exports = router;
