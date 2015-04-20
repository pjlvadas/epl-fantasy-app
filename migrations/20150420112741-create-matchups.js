"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("matchups", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      week_ID: {
        type: DataTypes.INTEGER
      },
      team_one_ID: {
        type: DataTypes.INTEGER
      },
      team_two_ID: {
        type: DataTypes.INTEGER
      },
      season_ID: {
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
    migration.dropTable("matchups").done(done);
  }
};