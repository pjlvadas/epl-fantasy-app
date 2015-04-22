"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("offensePerformances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      goals_scored: {
        type: DataTypes.INTEGER
      },
      assists: {
        type: DataTypes.INTEGER
      },
      shots_for: {
        type: DataTypes.INTEGER
      },
      penalties_drawn: {
        type: DataTypes.INTEGER
      },
      minutes_played: {
        type: DataTypes.INTEGER
      },
      started: {
        type: DataTypes.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("offensePerformances").done(done);
  }
};