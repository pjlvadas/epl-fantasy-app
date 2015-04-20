"use strict";
module.exports = function(sequelize, DataTypes) {
  var weeks = sequelize.define("weeks", {
    season: DataTypes.INTEGER,
    week_start: DataTypes.DATE,
    week_end: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return weeks;
};