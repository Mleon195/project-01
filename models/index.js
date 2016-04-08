var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-01_test");

var Album = require('./primary');

module.exports.Primary = Primary;


//module.exports.Albums = require('./albums.js');
//module.exports.Song = require('./song.js');
