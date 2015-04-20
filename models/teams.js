"use strict";
module.exports = function(sequelize, DataTypes) {
  var teams = sequelize.define("teams", {
    league_id: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER,
    team_name: DataTypes.STRING,
    team_motto: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return teams;
};