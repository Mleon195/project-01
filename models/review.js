var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Schema for reviews

var ReviewSchema = new Schema({
  name: String,
  text: String,
  date: String,
  coach: String
});

var review = mongoose.model('review', ReviewSchema);

module.exports = review;
