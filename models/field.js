var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Review = require('./review');


//Schema for SF soccer fields
var FieldSchema = new Schema({
  name: String,
  location: String,
  size: String,
  condition: String,
  surface: String,
  maintained: Boolean,
  bathroom: Boolean,
  parking_lot: Boolean,
  reviews: [Review.schema]

});

var Field = mongoose.model('Field', FieldSchema);

module.exports = Field;
