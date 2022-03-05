'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favourite.User = this.belongsTo(models.User)
      Favourite.Property = this.belongsTo(models.Property)
      // Favourite.Propertys = this.hasMany(models.Property)
    }
  };
  Favourite.init({
    PropertyId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};
