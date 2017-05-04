'use strict';
module.exports = function(sequelize, DataTypes) {
    var picks = sequelize.define('picks', {
        userId: DataTypes.INTEGER,
        matchId: DataTypes.INTEGER,
        choice: DataTypes.INTEGER,
        confidence: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.picks.belongsTo(models.user);
            }
        }
    });
    return picks;
};
