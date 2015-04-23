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
        type: DataTypes.STRING
      },
      owner_last_name: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING(20)
      },
      password_digest: {
        type: DataTypes.STRING
      },
      owner_bio: {
        type: DataTypes.TEXT
      },
      admin: {
        type: DataTypes.BOOLEAN
      },
      avatar: {
        type: DataTypes.TEXT
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