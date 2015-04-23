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
      fa_id: {
        type: DataTypes.INTEGER
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      country: {
        type: DataTypes.STRING
      },
      birthdate: {
        type: DataTypes.DATE
      },
      position: {
        type: DataTypes.STRING
      },
      preferred_foot: {
        type: DataTypes.STRING
      },
      height_in: {
        type: DataTypes.INTEGER
      },
      weight_lb: {
        type: DataTypes.INTEGER
      },
      country_code: {
        type: DataTypes.STRING(3)
      },
      full_first_name: {
        type: DataTypes.STRING
      },
      full_last_name: {
        type: DataTypes.STRING
      },
      epl_team: {
        type: DataTypes.STRING
      },
      epl_team_id: {
        type: DataTypes.INTEGER
      },
      team_id: {
        type: DataTypes.INTEGER
      },
      roster_id: {
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
    migration.dropTable("players").done(done);
  }
};