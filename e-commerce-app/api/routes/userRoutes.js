const express = require('express');
const { getAllUsers, updateUser } = require('../controllers/userController');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');
const userController = require('../controllers/userController'); // Bu satırı kaldırdık.

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/add', userController.addUser);
router.get('/all', userController.getAllUsers);
router.put('/update/:id', userController.updateUser);
router.get('/', authenticate, authorize(['admin']), getAllUsers);
router.put('/:id', authenticate, authorize(['admin']), updateUser);

module.exports = router;
