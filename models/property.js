'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Property.User = this.belongsTo(models.User)
      Property.Images = this.hasMany(models.Image)
      Property.Users = this.belongsToMany(models.User, {through: 'Favourite'})
      Property.Favourites = this.hasMany(models.Favourite)

    }
  };
  Property.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    price: DataTypes.INTEGER,
    year: DataTypes.STRING,
    area: DataTypes.STRING,
    roomNumber: DataTypes.INTEGER,
    description: DataTypes.STRING,
    imageOne:DataTypes.STRING,
    imageTwo:DataTypes.STRING,
    imageThree:DataTypes.STRING,
    imageFour:DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};
