"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("leagues", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      league_name: {
        type: DataTypes.STRING(20)
      },
      admin_id: {
        type: DataTypes.INTEGER
      },
      number_players: {
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
    migration.dropTable("leagues").done(done);
  }
};