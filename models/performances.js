"use strict";
module.exports = function(sequelize, DataTypes) {
  var performances = sequelize.define("performances", {
    player_id: DataTypes.INTEGER,
    week_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return performances;
};