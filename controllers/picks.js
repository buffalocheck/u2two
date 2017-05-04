//Requires & global var's
var express = require('express');
var router = express.Router();
var db = require("../models");
//set up route here
router.get("/", function(req, res) {
    //db.mytable.find(where).then(function(data){});
    db.picks.find({
        where: { matchId: 4 }
    }).then(function(allpicks) {
        res.render('picks', { allpicks: allpicks });
    });
    // res.render("picks", {data: })
});
router.get("/mypicks", function(req, res) {
    db.picks.findAll({
        where: { userId: req.user.id },
        // include: [db.matchup]
    }).then(function(picks) {
        console.log(picks)
        res.render('myPicks', { picks: picks });
    });

});
router.get("/:weekNum", function(req, res) {
    //on hold
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
