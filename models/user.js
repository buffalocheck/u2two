'use strict';
var bcrypt = require('bcrypt');
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        handle: DataTypes.STRING,
        facebookId: DataTypes.STRING,
        facebookToken: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: function(user, options, cb) {
                if (user && user.password) {
                    var hash = bcrypt.hashSync(user.password, 10);
                    user.password = hash; //changes password value into # before inserting into the db
                }
                cb(null, user);
            }
        },
        classMethods: {
            associate: function(models) {
                // Associations can be defined here - one to many
                models.user.hasMany(models.picks);
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
            getFullName: function() {
                return this.firstName + " " + this.lastName;
            }
        }
    });
    return user;
};
