"use strict";
module.exports = function(sequelize, DataTypes) {
  var players = sequelize.define("players", {
    player_first_name: DataTypes.STRING,
    player_last_name: DataTypes.STRING,
    position: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return players;
};