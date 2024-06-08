
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { generateAccessToken } = require('../services/authService');
const { Op } = require('sequelize');

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, address, telephoneNumber } = req.body;

    // Check if user with the same email or username already exists
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email: email }, { username: username }]
      }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User with the same email or username already exists.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      address,
      telephoneNumber
    });

    // Generate access token
    const accessToken = generateAccessToken(user);

    return res.status(201).json({ accessToken });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Generate access token
    const accessToken = generateAccessToken(user);

    return res.status(200).json({ accessToken });
  } catch (error) {
    console.error('Error logging in user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  registerUser,
  loginUser
};
