'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('universities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uNickName: {
        type: Sequelize.STRING
      },
      uName: {
        type: Sequelize.STRING
      },
      uMascot: {
        type: Sequelize.STRING
      },
      uColor1: {
        type: Sequelize.STRING
      },
      uColorBg: {
        type: Sequelize.STRING
      },
      confId: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('universities');
  }
};