"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("teams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      league_id: {
        type: DataTypes.INTEGER
      },
      owner_id: {
        type: DataTypes.INTEGER
      },
      team_name: {
        type: DataTypes.STRING
      },
      team_motto: {
        type: DataTypes.STRING
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
    migration.dropTable("teams").done(done);
  }
};