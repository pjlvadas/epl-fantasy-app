"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("weeks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      season: {
        type: DataTypes.INTEGER
      },
      week_start: {
        type: DataTypes.DATE
      },
      week_end: {
        type: DataTypes.DATE
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
    migration.dropTable("weeks").done(done);
  }
};