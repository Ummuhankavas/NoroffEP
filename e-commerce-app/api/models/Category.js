module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      name: DataTypes.STRING,
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'categories',
    });
  
    return Category;
  };
  