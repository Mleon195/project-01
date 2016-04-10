var db = require("./models");


var fieldList = [
  {
    name: 'Golden Gate Park Polo Field',
    location: 'Golden Gate Park',
    size: 'Regulation',
    condition: 'Excellent',
    surface: 'Grass',
    maintained: 'periodically',
    bathroom: true,
    parking_lot: true,
    reviews: [{
      name: "Pat",
      text: "good",
      date: "4/4",
      coach: false
    }]
},
  {
    name: 'Rossi Playground',
    location: '600 Arguello Blvd',
    size: 'Regulation',
    condition: 'Poor',
    surface: 'grass',
    maintained: 'frequenly',
    bathroom: true,
    parking_lot: true,
    reviews: [{
      name: "Pat",
      text: "good",
      date: "4/4",
      coach: false
    }]
  },
  {
    name: 'Beach Chalet',
    location: '1500 John F Kennedy',
    size: 'regulation',
    condition: 'Poor',
    surface: 'grass',
    maintained: 'frequenly',
    bathroom: true,
    parking_lot: true,
    reviews: [{
      name: "Pat",
      text: "good",
      date: "4/4",
      coach: false
    }]
  },
  {
    name: 'Grattan',
    location: '1180 Stayan Street',
    size: 'Half Field',
    condition: 'dry',
    surface: 'hard-grass',
    maintained: 'periodically',
    bathroom: false,
    parking_lot: false,
    reviews: [{
      name: "Pat",
      text: "good",
      date: "4/4",
      coach: false
    }]
  },
  {
    name: 'Garfield',
    location: 'Harrison St & 25th St',
    size: 'Half',
    condition: 'Excellent',
    surface: 'turf',
    maintained: 'regularly',
    bathroom: false,
    parking_lot: false,
    reviews: [{
      name: "Pat",
      text: "good",
      date: "4/4",
      coach: false
    }]
  },
  {
    name: 'West Sunset',
    location: '2100 39th Avenue',
    size: 'Regulation',
    condition: 'Excellent',
    surface: 'turf',
    maintain: 'rarely',
    bathroom: true,
    parking_lot: false,
    reviews: [{
      name: "Pat",
      text: "good",
      date: "4/4",
      coach: false
    }]
  }
];


db.Field.remove({}, function(err, review){

  db.Field.create(fieldList, function(err, fields){
    if (err) { return console.log('ERROR', err); }
    console.log("all fields:", fields);
    console.log("created", fields.length, "fields");
    process.exit();
  });

});
