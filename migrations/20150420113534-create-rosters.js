"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("rosters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      week_id: {
        type: DataTypes.INTEGER
      },
      team_id: {
        type: DataTypes.INTEGER
      },
      player_id: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("rosters").done(done);
  }
};