"use strict";
module.exports = function(sequelize, DataTypes) {
  var goaliePerformances = sequelize.define("goaliePerformances", {
    saves: DataTypes.INTEGER,
    goals_against: DataTypes.INTEGER,
    clean_sheets: DataTypes.INTEGER,
    yellow_cards: DataTypes.INTEGER,
    red_cards: DataTypes.INTEGER,
    minutes_played: DataTypes.INTEGER,
    goals_for: DataTypes.INTEGER,
    assists_for: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return goaliePerformances;
};