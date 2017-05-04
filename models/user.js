'use strict';
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        handle: DataTypes.STRING,
        facebookId: DataTypes.STRING,
        facebookToken: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.user.hasMany(models.pick);
            }
        }
    });
    return user;
};
