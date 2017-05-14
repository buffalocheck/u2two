//Requires & global var's
var express = require('express');
var router = express.Router();
var db = require("../models");
//set up route here
router.get("/", function(req, res) {
    //db.mytable.find(where).then(function(data){});
    db.user.find({
        where: { id: req.user.id }
    }).then(function(user) {
        user.getPicks({
            include: [db.match]
        }).then(function(picks) {
            console.log(picks)
            res.render("dash", { picks: picks });
        });
    });
});
router.get("/wklyOverview", function(req, res) {
    res.render("wklyOverview.ejs");
});
router.get("/standings", function(req, res) {
    res.render("standings.ejs");
});
router.get("/otherPlayers", function(req, res) {
    res.render("otherPlayers.ejs");
});
router.get("/myPicks", function(req, res) {
    //start
    db.match.findAll()
        .then(function(allMatches) {
            console.log(allMatches);
            res.render("myPicks", { allMatches: allMatches, picks: [] });
        });
    // db.user.find({
    //     where: { id: req.user.id },
    // }).then(function(user) {
    //     user.getPicks({
    //         include: [db.match]
    //     }).then(function(picks) {
    //         res.render("myPicks", { picks: picks });
    //     });
    // });
    //end
});
router.get("/myPicks/:weekNum", function(req, res) {
    db.match.findAll({ where: { week: req.params.weekNum } }).then(function(weeklyMatches) {
        res.render('myPicks', { weeklyMatches: weeklyMatches });
    }).catch(function(err) {
        res.status(500).render('error');
    });
});

//post here
router.post("/myPicks/:weekNum", function(req, res) {
    console.log(req.params.weekNum);
    console.log(req.body);
    db.pick.create({
            userId: parseInt(req.user.id),
            matchId: parseInt(req.body.matchId),
            choice: parseInt(req.body.choice),
            week: parseInt(req.body.week)
        })
        .then(function(pick) {
            res.redirect('/dash/myPicks/' + req.params.weekNum);
        });
});
//put here
router.put("/", function(req, res) {
    res.send("Put is working!")
});
//Export
module.exports = router;
