var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");
var Announcement = require("../models/reports");
var request = require("request");

router.get("/", function(req, res) {
    res.redirect("/dashboard");
});

router.get("/dashboard", function(req, res) {
    Intersection.find({}, function(foundIntersections, err) {
        if (err) {
            console.log(err);
        } else {

        }
    });
});