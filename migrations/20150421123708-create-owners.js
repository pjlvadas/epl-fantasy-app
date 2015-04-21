"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("owners", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      owner_first_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      owner_last_name: {
        type: DataTypes.STRING
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING(20)
      },
      password_digest: {
        allowNull: false,
        type: DataTypes.STRING
      },
      owner_bio: {
        type: DataTypes.TEXT
      },
      admin: {
        allowNull: false,
        type: DataTypes.BOOLEAN
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
    migration.dropTable("owners").done(done);
  }
};