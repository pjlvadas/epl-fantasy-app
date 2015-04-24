"use strict";
module.exports = function(sequelize, DataTypes) {
  var owners = sequelize.define("owners", {
    owner_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Please enter a first name'}
      }
    },
    owner_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Please enter a last name'}
      }
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: {msg: 'Please enter a unique username'}
      validate: {
        notEmpty: {msg: 'Please enter a username'}
      }
    },
    password_digest: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Please enter a password'}
      }
    },
    owner_bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        isInt: {msg: 'Admin ID must be an integer'}
        notEmpty: {msg: 'Please enter an Admin ID#'}
      }
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true
  }, {

    underscored: true,
     
    classMethods: {
      associate: function(models) {
        // owners.hasMany(models.teams, { foreignKey: 'owner_id' });
        owners.hasMany(models.leagues, { foreignKey: 'admin_id' });      
      }
    }
  });
  return owners;
};