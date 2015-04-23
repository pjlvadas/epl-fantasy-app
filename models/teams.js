"use strict";
module.exports = function(sequelize, DataTypes) {
  var teams = sequelize.define("teams", {
    league_id: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER,
    team_name: DataTypes.STRING,
    team_motto: DataTypes.STRING
  }, {

    underscored: true,

    // timestamps: false,
     
    classMethods: {
      associate: function(models) {
      //   teams.belongsTo(models.owners, { foreignKey: 'owner_id' });
      //   teams.belongsTo(models.leagues, { foreignKey: 'league_id' });

      //   teams.hasMany(models.matchups, { foreignKey: 'team_id' });
      //   teams.hasMany(models.rosters, { foreignKey: 'team_id',
      //                                    onDelete: 'cascade',
      //                                    hooks: true });                                                         
      // }
    }
  });
  return teams;
};