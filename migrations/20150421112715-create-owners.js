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
      password: {
        type: DataTypes.STRING(20)
      },
      owner_bio: {
        type: DataTypes.TEXT
      },
      admin: {
        type: DataTypes.BOOLEAN
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
    migration.dropTable("owners").done(done);
  }
};