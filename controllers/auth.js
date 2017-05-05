//Requires & global var's
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();

// Routes
router.get('/login', function(req, res) {
    res.render('logInForm');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/dash',
    successFlash: 'Nice, you\'re logged in!',
    failureRedirect: '/auth/login',
    failureFlash: 'Wah wah... try logging in again.'
}));

router.get('/signup', function(req, res) {
    res.render('signupform');
});

router.post('/signup', function(req, res, next) {
    db.user.findOrCreate({
        where: { email: req.body.email },
        defaults: {
            'firstName': req.body.firstName,
            'lastName': req.body.lastName,
            'password': req.body.password,
            'handle': req.body.handle,
        }
    }).spread(function(user, wasCreated) {
        if (wasCreated) {
            //good!
            passport.authenticate('local', {
                successRedirect: '/dash',
                successFlash: 'Your account has been created & you\'re logged in, yo!',
                failureRedirect: '/login',
                failureFlash: 'Wah wah... an unknown error occured. Please re-log in.'
            })(req, res, next);
        } else {
            //Bad!
            req.flash('error', 'That email already exists, yo! Please log in with it.');
            res.redirect('/auth/login');
        }
    }).catch(function(error) {
        req.flash('error', error.message);
        res.redirect('/auth/signup');
    });
});

router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success', 'You are logged out.');
    res.redirect('/');
});

//Facebook Auth Section
router.get('/facebook', passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
}));

router.get('/callback/facebook', passport.authenticate('facebook', {
    successRedirect: '/picks',
    successFlash: 'You\'ve logged in. Get your picks in!',
    failureRedirect: '/auth/login',
    failureFlash: 'Ug...Facebook says no'
}));

//Export
module.exports = router;
