"use strict";
module.exports = function(sequelize, DataTypes) {
  var rosters = sequelize.define("rosters", {
    week_id: DataTypes.INTEGER,
    team_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return rosters;
};