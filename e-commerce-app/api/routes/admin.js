const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/admin', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to the admin panel', user: req.user });
});

module.exports = router;
