"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("players", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      player_first_name: {
        type: DataTypes.STRING
      },
      player_last_name: {
        type: DataTypes.STRING
      },
      position: {
        type: DataTypes.STRING
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
    migration.dropTable("players").done(done);
  }
};