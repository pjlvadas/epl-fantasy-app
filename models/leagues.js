"use strict";
module.exports = function(sequelize, DataTypes) {
  var leagues = sequelize.define("leagues", {
    league_name: DataTypes.STRING(20),
    admin_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return leagues;
};