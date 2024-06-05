const express = require('express');
const { register, login, init } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/init', init);

module.exports = router;
