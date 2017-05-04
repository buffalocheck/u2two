'use strict';
module.exports = function(sequelize, DataTypes) {
    var match = sequelize.define('match', {
        week: DataTypes.INTEGER,
        date: DataTypes.STRING,
        day: DataTypes.STRING,
        title: DataTypes.STRING,
        visId: DataTypes.INTEGER,
        homeId: DataTypes.INTEGER,
        visScore: DataTypes.INTEGER,
        homeScore: DataTypes.INTEGER,
        spread: DataTypes.INTEGER,
        openTimeEt: DataTypes.INTEGER,
        closeTimeEt: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.match.hasMany(models.pick);
            }
        }
    });
    return match;
};
