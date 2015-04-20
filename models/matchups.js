"use strict";
module.exports = function(sequelize, DataTypes) {
  var matchups = sequelize.define("matchups", {
    week_ID: DataTypes.INTEGER,
    team_one_ID: DataTypes.INTEGER,
    team_two_ID: DataTypes.INTEGER,
    season_ID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return matchups;
};