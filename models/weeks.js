"use strict";
module.exports = function(sequelize, DataTypes) {
  var weeks = sequelize.define("weeks", {
    season: DataTypes.INTEGER,
    week_start: DataTypes.DATE,
    week_end: DataTypes.DATE
  }, {

    underscored: true,

    // timestamps: false,
     
    classMethods: {
      associate: function(models) {
        weeks.hasMany(models.matchups, { foreignKey: 'week_id' });
        weeks.hasMany(models.rosters, { foreignKey: 'week_id' });        
        weeks.hasMany(models.performances, { foreignKey: 'week_id' });
        weeks.hasMany(models.offensePerformances, { foreignKey: 'week_id' });
        weeks.hasMany(models.defensePerformances, { foreignKey: 'week_id' });
        weeks.hasMany(models.goaliePerformances, { foreignKey: 'week_id' });                                                 

      }
    }
  });
  return weeks;
};