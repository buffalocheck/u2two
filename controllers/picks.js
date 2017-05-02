//Requires & global var's
var express = require('express');
var router = express.Router();
//set up route here
router.get("/", function(req, res) {
    res.render("picks")
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
