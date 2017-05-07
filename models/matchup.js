'use strict';
module.exports = function(sequelize, DataTypes) {
  var matchup = sequelize.define('matchup', {
    week: DataTypes.INTEGER,
    date: DataTypes.STRING,
    day: DataTypes.STRING,
    title: DataTypes.STRING,
    visId: DataTypes.INTEGER,
    homeId: DataTypes.INTEGER,
    visScore: DataTypes.INTEGER,
    homeScore: DataTypes.INTEGER,
    spread: DataTypes.INTEGER,
    openTimeEt: DataTypes.STRING,
    closeTimeEt: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return matchup;
};