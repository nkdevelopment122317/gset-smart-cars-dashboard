var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Report = require("../models/report");
var Intersection = require("../models/intersection");
var request = require("request");

router.get("/", function(req, res) {
    res.redirect("/dashboard");
});

router.get("/dashboard", function(req, res) {
    Intersection.find({}, function(foundIntersections, err) {
        if (err) {
            console.log(err);
        } else {
            res.render("dashboard", {intersections: foundIntersections});
        }
    });
});

module.exports = router;