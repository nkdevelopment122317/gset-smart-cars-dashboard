var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    join_date: {type: Date, default: Date.now},
    intersections: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Intersection"
    }
}, { usePushEach: true });

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);