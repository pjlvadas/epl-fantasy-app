"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("defensePerformances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      tackles: {
        type: DataTypes.INTEGER
      },
      goals_conceded: {
        type: DataTypes.INTEGER
      },
      own_goals: {
        type: DataTypes.INTEGER
      },
      yellow_cards: {
        type: DataTypes.INTEGER
      },
      red_cards: {
        type: DataTypes.INTEGER
      },
      penalties_conceded: {
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
    migration.dropTable("defensePerformances").done(done);
  }
};