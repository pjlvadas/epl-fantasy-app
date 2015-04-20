"use strict";
module.exports = function(sequelize, DataTypes) {
  var offensePerformances = sequelize.define("offensePerformances", {
    goals_scored: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    shots_for: DataTypes.INTEGER,
    penalties_drawn: DataTypes.INTEGER,
    minutes_played: DataTypes.INTEGER,
    started: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return offensePerformances;
};