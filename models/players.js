"use strict";
module.exports = function(sequelize, DataTypes) {
  var players = sequelize.define("players", {
    player_first_name: DataTypes.STRING,
    player_last_name: DataTypes.STRING,
    position: DataTypes.STRING,
    epl_team: DataTypes.STRING,
    home_country: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        players.hasMany(models.offensePerformances, { foreignKey: 'player_id' });
        players.hasMany(models.defensePerformances, { foreignKey: 'player_id' });
        players.hasMany(models.goaliePerformances, { foreignKey: 'player_id' });
        players.hasMany(models.performances, { foreignKey: 'player_id' });        

        players.belongsTo(models.rosters, { foreignKey: 'player_id' });                        
      }
    }
  });
  return players;
};