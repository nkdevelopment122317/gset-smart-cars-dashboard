var middlewareObj = {};
var Announcement = require('../models/announcement');
var Cluborg = require('../models/cluborg');
var School = require('../models/school');

middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
};

middlewareObj.checkIntersectionOwnership = function(req, res, next) {
     //authorization (permissions)

    //is the user logged in?
    if (req.isAuthenticated()) {
        Intersection.findById(req.params.id, function(err, foundIntersection) {
            if (err) {
                req.flash("error", "Intersection Not Found");
                res.redirect("/intersections");
            } else {
                //does the user own the campground?
                if (foundIntersection.author.id.equals(req.user._id)) { //use the equals() method because you can't triple equals an object id and a number
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("/login"); //takes the user back to the previous page they were on
    }
};

// middlewareObj.checkCluborgOwnership = function(req, res, next) {
//     if (req.isAuthenticated()) {
//         Cluborg.findById(req.params.club_id, function(err, foundCluborg) {
//             if (err) {
//                 req.flash("error", "Club not found");
//                 res.redirect("/schools/:id/cluborgs");
//             } else {
//                 if (foundCluborg.author.id.equals(req.user._id)) {
//                     next();
//                 } else {
//                     req.flash("error", "You don't have permission to do that");
//                     res.redirect("back");
//                 }
//             }
//         });
//     } else {
//         req.flash("error", "You need to be logged in to do that");
//         res.redirect("/login");
//     }
// };

// middlewareObj.checkSchoolOwnership = function(req, res, next) {
//     if (req.isAuthenticated()) {
//         School.findById(req.params.id, function(err, foundSchool) {
//             if (err) {
//                 req.flash("error", "School not found");
//                 res.redirect("/schools");
//             } else {
//                 if (foundSchool.author.id.equals(req.user._id)) {
//                     next();
//                 } else {
//                     req.flash("error", "You don't have permission to do that");
//                     res.redirect("back");
//                 }
//             }
//         });
//     } else {
//         req.flash("error", "You need to be logged in to do that");
//         res.redirect("/login");
//     }
// };

// middlewareObj.isInSchool = function(req, res, next) {
//     if (req.isAuthenticated()) {
//         if (req.user.school != undefined) {
//             next();
//         } else {
//             req.flash("error", "Hmm... It looks like you don't belong to any school.");
//             res.redirect("back");
//         }
//     } else {
//         req.flash("error", "You need to be logged in to do that");
//         res.redirect("/login");
//     }
// };

// middlewareObj.isAdminOrAdvisor = function(req, res, next) {
//     if (req.isAuthenticated()) {
//         if (req.user.isAdmin || req.user.isFaculty) {
//             next();
//         } else {
//             req.flash("error", "You are not authorized to do that.");
//             res.redirect("back");
//         }
//     } else {
//         req.flash("error", "You need to be logged in to do that");
//         res.redirect("/login");
//     }
// };

// middlewareObj.isAdmin = function(req, res, next) {
//     if (req.isAuthenticated()) {
//         if (req.user.isAdmin) {
//             console.log("he's good");
//             next();
//         } else {
//             req.flash("error", "You are not authorized to do that.");
//             res.redirect("back");
//         }
//     } else {
//         req.flash("error", "You need to be logged in to do that");
//         res.redirect("/login");
//     }
// };

module.exports = middlewareObj;