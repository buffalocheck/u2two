'use strict';
module.exports = function(sequelize, DataTypes) {
    var pick = sequelize.define('pick', {
        userId: DataTypes.INTEGER,
        matchId: DataTypes.INTEGER,
        choice: DataTypes.INTEGER,
        confidence: DataTypes.INTEGER,
        week: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.pick.belongsTo(models.user);
                models.pick.belongsTo(models.match);
            }
        }
    });
    return pick;
};
