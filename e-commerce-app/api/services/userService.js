// services/UserServices.js

const { User } = require('../models'); // User modelini dahil ediyoruz

class UserServices {
  async createUser(userData) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }

  async findUserById(userId) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error('Failed to find user');
    }
  }

  async updateUser(userId, newData) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
      await user.update(newData);
      return user;
    } catch (error) {
      throw new Error('Failed to update user');
    }
  }

  async deleteUser(userId) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
      await user.destroy();
      return true; // Başarılıysa true döndürülebilir
    } catch (error) {
      throw new Error('Failed to delete user');
    }
  }
  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error('Failed to get users');
    }
  }
}

module.exports = new UserServices();
