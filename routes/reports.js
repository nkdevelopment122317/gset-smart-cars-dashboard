var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Report = require("../models/report");
var Intersection = require("../models/intersection");
var request = require("request");

module.exports = router;