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

    underscored: true,

    // timestamps: false,
     
    classMethods: {
      associate: function(models) {
      //   goaliePerformances.belongsTo(models.players, { foreignKey: 'player_id'});
      //   goaliePerformances.belongsTo(models.weeks, { foreignKey: 'week_id'});
      // }
    }
  });
  return goaliePerformances;
};