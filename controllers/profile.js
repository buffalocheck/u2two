//we are in profile

var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res) {
    res.render('profile');
});

//comment: trial put route
router.put('/', function(req, res) {
    var profileData = req.body;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var password = req.body.password;
    var handle = req.body.handle;

    var updateProfile = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        // password: password,

        handle: handle
    };
    console.log(updateProfile);

    var options = {
        where: { id: req.user.id }
    };

    db.user.update(updateProfile, options).then(function(updatedProfile) {
        console.log("updated user?");
        res.redirect(303, "/profile");
    }).catch(function(error) {
        res.status(404).send(error);
    });
});

module.exports = router;
