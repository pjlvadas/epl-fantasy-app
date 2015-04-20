"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("goaliePerformances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      saves: {
        type: DataTypes.INTEGER
      },
      goals_against: {
        type: DataTypes.INTEGER
      },
      clean_sheets: {
        type: DataTypes.INTEGER
      },
      yellow_cards: {
        type: DataTypes.INTEGER
      },
      red_cards: {
        type: DataTypes.INTEGER
      },
      minutes_played: {
        type: DataTypes.INTEGER
      },
      goals_for: {
        type: DataTypes.INTEGER
      },
      assists_for: {
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
    migration.dropTable("goaliePerformances").done(done);
  }
};