"use strict";
module.exports = function(sequelize, DataTypes) {
  var leagues = sequelize.define("leagues", {
    league_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Please name your league.'}
      }

    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {msg: 'Please enter an integer'},
      }
    number_players: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {msg: 'Please enter an integer'},
        max: {args: [10], msg: '10 Teams is the maximum for a league.'}
      }
  }, {

    underscored: true,
     
    classMethods: {
      associate: function(models) {
        leagues.hasMany(models.teams, { foreignKey: 'league_id'});
        leagues.belongsTo(models.owners, { foreignKey: 'admin_id'});        
      }
    }
  });
  return leagues;
};