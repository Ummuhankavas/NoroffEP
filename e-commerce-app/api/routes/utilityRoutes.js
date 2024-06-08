
const express = require('express');
const router = express.Router();
const { initDatabase } = require('../controllers/utilityController');

router.post('/init', initDatabase);

module.exports = router;
