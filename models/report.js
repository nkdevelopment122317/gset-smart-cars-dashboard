var mongoose = require('mongoose');

var reportSchema = new mongoose.Schema({
   name: String,
   description: String,
   image: String,
   school: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "School"
   },
   date_created: {type: Date, default: Date.now}
}, { usePushEach: true });

//DO NOT PLUGIN PASSPORT TO THIS SCHEMA. THAT CAUSED THE DUPLICATE KEY ERROR!!!!!!!

module.exports = mongoose.model("Report", reportSchema);