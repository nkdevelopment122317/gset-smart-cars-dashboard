var mongoose = require('mongoose');

var cluborgSchema = new mongoose.Schema({
   name: String,
   description: String,
   location: String,
   image: String,
   author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
   },
   dimensions: [Number],
   date_created: {type: Date, default: Date.now}
}, { usePushEach: true });

//DO NOT PLUGIN PASSPORT TO THIS SCHEMA. THAT CAUSED THE DUPLICATE KEY ERROR!!!!!!!

module.exports = mongoose.model("Intersection", cluborgSchema);