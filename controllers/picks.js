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
