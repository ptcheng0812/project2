'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.AuthenticityTokens = this.hasMany(models.AuthenticityToken)
      User.Properties = this.hasMany(models.Property)
      User.Properties = this.belongsToMany(models.Property, {through: 'Favourite'})
      User.Favourites = this.hasMany(models.Favourite)
    }
  };
  User.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    avatar: DataTypes.STRING,
    introduction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
