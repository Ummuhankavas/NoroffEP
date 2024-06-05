const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { Op } = require('sequelize');

const register = async (req, res) => {
  const { firstname, lastname, username, email, password, address, telephonenumber } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      address,
      telephonenumber
    });
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.status(201).json({ success: true, token });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const login = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ where: { [Op.or]: [{ username }, { email }] } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
};

module.exports = { register, login };