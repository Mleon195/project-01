// SERVER-SIDE JAVASCRIPT

var express = require('express'),
  db = require('./models'),
  app = express();


// serve static files from public folder
app.use(express.static(__dirname + '/public'));

//parse incoming data
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**********
 * ROUTES *
 **********/

/*
 * HTML ENDPOINTS
 */
//Homepage
app.get('/', function homepage(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/views/index.html');
});
//second page link
app.get('/second', function homepage(req, res) {
  res.sendFile(__dirname + '/views/second.html');
});


// TODO: Make 'api/sanity' endpoint!

/*
 * API ENDPOINTS
 */
/* GET ALL FILEDS DB Entries */
app.get('/api/fields', function sanity(req, res) {

  db.Field.find( {}, function getAllFields(err, allFields){
    if (err) {
       console.log('ERROR', err);
     } else {

       res.json(allFields);
       console.log(allFields);
     }
  });

});


//POST /api/reviews
app.post('/api/fields', function reviewCreate(req, res){
    console.log('body', req.body);
    db.Field.create(req.body, function(err, field) {
      if (err){
        console.log('error', err);
      }
      console.log(field);
      res.json(field);
    });
});





/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
