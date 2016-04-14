var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-01");

var Field = require('./field');

module.exports.Field = Field;


//module.exports.field = require('./field.js');
//module.exports.review = require('./review.js');
