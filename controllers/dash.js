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
router.get("/mypicks", function(req, res) {
    //start
    db.user.find({
        where: { id: req.user.id },
    }).then(function(user) {
        user.getPicks({
            include: [db.match]
        }).then(function(picks) {
            res.render("myPicks", { picks: picks });
        });
    });
    //end
});
router.get("/myPicks/:weekNum", function(req, res) {
    //on hold - req.params.week
});

//post here
router.post("/", function(req, res) {
    res.send("Post is working!")
});
//put here
router.put("/", function(req, res) {
    res.send("Put is working!")
});
//Export
module.exports = router;
