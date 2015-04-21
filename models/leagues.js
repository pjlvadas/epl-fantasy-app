"use strict";
module.exports = function(sequelize, DataTypes) {
  var leagues = sequelize.define("leagues", {
    league_name: DataTypes.STRING(20),
    admin_id: DataTypes.INTEGER
  }, {

    underscored: true,

    // timestamps: false,
     
    classMethods: {
      associate: function(models) {
        leagues.hasMany(models.teams, { foreignKey: 'league_id'});
        leagues.belongsTo(models.owners, { foreignKey: 'admin_id'});        
      }
    }
  });
  return leagues;
};