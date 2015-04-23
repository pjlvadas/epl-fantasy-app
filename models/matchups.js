"use strict";
module.exports = function(sequelize, DataTypes) {
  var matchups = sequelize.define("matchups", {
    week_ID: DataTypes.INTEGER,
    team_one_ID: DataTypes.INTEGER,
    team_two_ID: DataTypes.INTEGER,
    season_ID: DataTypes.INTEGER
  }, {

    underscored: true,

    // timestamps: false,
     
    classMethods: {
      associate: function(models) {
      //   matchups.belongsTo(models.weeks, { foreignKey: 'week_id'});
      //   matchups.belongsToMany(models.teams, {
      //     through: 'matchups_teams',
      //     foreignKey: 'team_id'
      //   });

      }
    }
  });
  return matchups;
};