//var db = require("./models");


var fieldList2 = [
  {
    name: 'Golden Gate Park Polo Field',
    location: 'Golden Gate Park',
    size: 'Regulation',
    condition: 'Excellent',
    surface: 'Grass',
    maintained: 'periodically',
    bathroom: true,
    parking_lot: true,
    reviews: {
      name: "Pat",
      text: "good",
      date: "4/4",
      coach: false
    }
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
    reviews: {
      name: "George",
      text: "grass super wet",
      date: "4/14",
      coach: true
    }
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
    reviews: {
      name: "Paul",
      text: "grass super short",
      date: "4/8",
      coach: true
    }
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
    reviews: {
      name: "Roni",
      text: "community activity nerby, parking hell",
      date: "4/12",
      coach: false
    }
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
    reviews: {
      name: "Pat",
      text: "parking lot full",
      date: "4/4",
      coach: true
    }
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
    reviews: {
      name: "Pat",
      text: "no very good",
      date: "4/4",
      coach: false
    }
  }
];


// db.Field.remove({}, function(err, fields){
//
//   db.Field.create(fieldList, function(err, newFields){
//     if (err) { return console.log('ERROR', err); }
//     console.log("all fields:", newFields);
//     console.log("created", fields.length, "fields");
//     process.exit();
//   });
//
// });
