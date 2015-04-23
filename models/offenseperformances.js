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

    underscored: true,

    // timestamps: false,
     
    classMethods: {
      associate: function(models) {
      //   offensePerformances.belongsTo(models.players, { foreignKey: 'player_id'});
      //   offensePerformances.belongsTo(models.weeks, { foreignKey: 'week_id'});
      // }
    }
  });
  return offensePerformances;
};