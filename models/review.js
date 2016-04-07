var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Schema for reviews

var ReviewSchema = new Schema({
  name: String,
  text: String,
  date: String,
  coach: Boolean
});

var Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
