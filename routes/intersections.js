var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");
var Announcement = require("../models/reports");
var request = require("request");

router.get("/", function(req, res) {

});