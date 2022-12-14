'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }
    static createProfileName(id, username, role) {
      return Profile.create({fullName: `${username}-${role}`, class: 'duabelascumacontoh', UserId: id})
    }
  }
  Profile.init({
    fullName: DataTypes.STRING,
    class: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};