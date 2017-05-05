'use strict';
module.exports = function(sequelize, DataTypes) {
  var university = sequelize.define('university', {
    uNickName: DataTypes.STRING,
    uName: DataTypes.STRING,
    uMascot: DataTypes.STRING,
    uColor1: DataTypes.STRING,
    uColorBg: DataTypes.STRING,
    confId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return university;
};