module.exports = (sequelize, DataTypes) => {
    const Membership = sequelize.define('Membership', {
      name: DataTypes.STRING,
      min_items: DataTypes.INTEGER,
      max_items: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
    }, {
      timestamps: false,
      tableName: 'memberships',
    });
  
    return Membership;
  };
  