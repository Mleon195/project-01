var db = require("./models");


var field = [
  {
    name: 'Golden Gate Park Polo Field',
    location: 'Golden Gate Park',
    size: 'Regulation',
    condition: 'Excellent',
    surface: 'Grass',
    maintained: 'periodically',
    bathroom: true,
    parking_lot: true,
    reviews: [Review.schema]
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
    reviews: [Review.schema]
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
    reviews: [Review.schema]
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
    reviews: [Review.schema]
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
    reviews: [Review.schema]
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
    reviews: [Review.schema]
  }
];
