const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();


const registerCallback = (req, res) => {
  registerUser(req, res);
};

const loginCallback = (req, res) => {
  loginUser(req, res);
};


router.post('/register', registerCallback);
router.post('/login', loginCallback);

module.exports = router;
