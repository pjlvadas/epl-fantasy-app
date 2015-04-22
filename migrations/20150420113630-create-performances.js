"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("performances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      player_id: {
        type: DataTypes.INTEGER
      },
      week_id: {
        type: DataTypes.INTEGER
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
    migration.dropTable("performances").done(done);
  }
};