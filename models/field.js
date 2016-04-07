var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Schema for SF soccer fields
var FieldSchema = new Schema({
  name: String,
  location: String,
  size: String,
  condition: String,
  surface: String,
  maintain: Boolean,
  bathroom: Boolean,
  parking_lot: Boolean

});

var Field = mongoose.model('Field', FieldSchema);

module.exports = Field;
