"use strict";
module.exports = function(sequelize, DataTypes) {
  var defensePerformances = sequelize.define("defensePerformances", {
    tackles: DataTypes.INTEGER,
    goals_conceded: DataTypes.INTEGER,
    own_goals: DataTypes.INTEGER,
    yellow_cards: DataTypes.INTEGER,
    red_cards: DataTypes.INTEGER,
    penalties_conceded: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        defensePerformances.belongsTo(models.players, { foreignKey: 'player_id'});
        defensePerformances.belongsTo(models.weeks, { foreignKey: 'week_id'});
      }
    }
  });
  return defensePerformances;
};