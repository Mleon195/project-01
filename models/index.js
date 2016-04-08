var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-01_test");

var Field = require('./field');

module.exports.Field = Field;


//module.exports.Field = require('./field.js');
//module.exports.Review = require('./review.js');
