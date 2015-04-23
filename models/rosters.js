"use strict";
module.exports = function(sequelize, DataTypes) {
  var rosters = sequelize.define("rosters", {
    week_id: DataTypes.INTEGER,
    team_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER
  }, {

    underscored: true,

    // timestamps: false,
     
    classMethods: {
      associate: function(models) {
      //   rosters.belongsTo(models.teams, { foreignKey: 'team_id' });
      //   rosters.belongsTo(models.players, { foreignKey: 'player_id' });
      //   rosters.belongsTo(models.weeks, { foreignKey: 'week_id' });        
      }
    }
  });
  return rosters;
};