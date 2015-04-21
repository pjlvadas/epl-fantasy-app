"use strict";
module.exports = function(sequelize, DataTypes) {
  var performances = sequelize.define("performances", {
    player_id: DataTypes.INTEGER,
    week_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        performances.belongsTo(models.players, { foreignKey: 'player_id' });
        performances.belongsTo(models.weeks, { foreignKey: 'week_id' });        
      }
    }
  });
  return performances;
};