const { DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telephonenumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user'
    },

    MembershipId: { 
      type: DataTypes.INTEGER,
      allowNull: true, 
      references: {
        model: 'Memberships', 
        key: 'id' 
      }
    },

  
    // membershipStatus: {
    //   type: DataTypes.ENUM('bronze', 'silver', 'gold'),
    //   defaultValue: 'bronze'
    // },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Order);
    User.belongsTo(models.Membership);
  };

  return User;
};