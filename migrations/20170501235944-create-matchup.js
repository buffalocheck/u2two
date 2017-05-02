'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('matchups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      week: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      visId: {
        type: Sequelize.INTEGER
      },
      homeId: {
        type: Sequelize.INTEGER
      },
      visScore: {
        type: Sequelize.INTEGER
      },
      homeScore: {
        type: Sequelize.INTEGER
      },
      spread: {
        type: Sequelize.INTEGER
      },
      openTimeEt: {
        type: Sequelize.STRING
      },
      closeTimeEt: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('matchups');
  }
};