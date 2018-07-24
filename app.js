var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var User = require('./models/user');
var methodOverride = require('method-override');
var flash = require('connect-flash');

var PORT = process.env.PORT || 3000;

var intersectionRoutes = require('./routes/intersections');
var reportRoutes = require('./routes/reports');
var indexRoutes = require('./routes/index');
var apiRoutes = require('./routes/api');

mongoose.Promise = global.Promise;
var databaseUri =  "mongodb://traffic-guy:remote-locking123@ds139331.mlab.com:39331/gset-smart-cars-dashboard" || "mongodb://localhost/gset-smart-cars-dashboard";
mongoose.connect(databaseUri, {useMongoClient: true})
        .then(() => console.log(`Database connected at ${databaseUri}`))
        .catch(err => console.log(`Database connection error: ${err.message}`));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());

//PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret: "Chicken Nuggets are pretty great",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/intersections", intersectionRoutes);
app.use("/intersections/:id/reports", reportRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, process.env.IP, function() {
    console.log("[INFO] Intersection Monitoring System is online");
});

// app.listen(3000);