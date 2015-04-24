"use strict";
module.exports = function(sequelize, DataTypes) {
  var players = sequelize.define("players", {
    fa_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    country: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    position: DataTypes.STRING,
    preferred_foot: DataTypes.STRING,
    height_in: DataTypes.INTEGER,
    weight_lb: DataTypes.INTEGER,
    country_code: DataTypes.STRING(3),
    full_first_name: DataTypes.STRING,
    full_last_name: DataTypes.STRING,
    epl_team: DataTypes.STRING,
    epl_team_id: DataTypes.INTEGER,
    team_id: DataTypes.INTEGER,
    roster_id: DataTypes.INTEGER
  }, {

    underscored: true,
     
    classMethods: {
      associate: function(models) {
        // players.hasMany(models.offensePerformances, { foreignKey: 'player_id' });
        // players.hasMany(models.defensePerformances, { foreignKey: 'player_id' });
        // players.hasMany(models.goaliePerformances, { foreignKey: 'player_id' });
        // players.hasMany(models.performances, { foreignKey: 'player_id' });        

        // players.belongsTo(models.rosters, { foreignKey: 'player_id' });                        
      }
    }
  });
  return players;
};