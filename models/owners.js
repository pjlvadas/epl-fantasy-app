"use strict";
module.exports = function(sequelize, DataTypes) {
  var owners = sequelize.define("owners", {
    owner_first_name: DataTypes.STRING,
    owner_last_name: DataTypes.STRING,
    username: DataTypes.STRING(20),
    password_digest: DataTypes.STRING,
    owner_bio: DataTypes.TEXT,
    admin: DataTypes.BOOLEAN
  }, {

    underscored: true,

    // timestamps: false,
     
    classMethods: {
      associate: function(models) {
        owners.hasMany(models.teams, { foreignKey: 'owner_id' });
        owners.hasMany(models.leagues, { foreignKey: 'owner_id' });      }
    }
  });
  return owners;
};