'use strict';
var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [4, 32],
                    msg: "Password must be between 4-32 characters with no special characters."
                },
                isAlphanumeric: {
                    msg: "Password must be between 4-32 characters with no special characters."
                }
            }
        },
        handle: DataTypes.STRING,
        facebookId: DataTypes.STRING,
        facebookToken: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: function(user, options, cb) {
                if (user && user.password) {
                    var hash = bcrypt.hashSync(user.password, 10);
                    user.password = hash;
                }
                cb(null, user);
            }

        },
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.user.hasMany(models.pick);
            }
        },
        instanceMethods: {
            isValidPassword: function(passwordTyped) {
                return bcrypt.compareSync(passwordTyped, this.password);
            },
            toJSON: function() {
                var data = this.get();
                delete data.password;
                return data;
            },
        }
    });
    return user;
};
