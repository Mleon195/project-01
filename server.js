// SERVER-SIDE JAVASCRIPT

var express = require('express'),
  database = require('./models'),
  app = express();


// serve static files from public folder
app.use(express.static(__dirname + '/public'));

//parse incoming data
var bodyParser =require('body-parser');
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

  database.Field.find( {}, function getAllFields(err, allFields){
    if (err) { return console.log('ERROR', err); }

    res.json(allFields);
  });

});
//links to second page
app.get('/second', function homepage(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + 'views/second.html');
});

//POST /api/reviews
app.post('/api/reviews', function reviewCreate(req, res){
    console.log('body', req.body);
    db.Review.create(req.body, function(err, review) {
      if (err){
        console.log('error', err);
      }
      console.log(review);
      res.json(review);
    });
});

//posting to DB
app.post('/api/entry', function(req, res){
    var newReview = new db.Review({
      name: req.body.name,
      text: req.body.text,
      date: req.body.date,
      coach: req.body.text
    });
newReview.save(function(err, saved){
    console.log('test', req.body);
    res.json(saved);
  });
});


//UPDATE Review
app.put('/api/review/:id', function updateReview(req, res){
  console.log('body', req.body);
  db.Review.findOne({_id: req.params.id}, function(error, review){
    if(error) {console.log('error', error); }
    review.nameField = req.body.nameField;
    review.textReview = req.body.textReview;
    review.save(function (error, saved) {
    if (error) { console.log('Could not update review: ' + error); }
    res.json(saved);
          });
      });
});

/*
 * JSON API Endpoints
 */

//app.get('/api', controllers.api.index);
// app.get('/api/field', controllers.field.index);
// app.get('/api/field/:fieldId', controllers.field.show);
//app.post('/api/review', controllers.field.create);
// app.post('/api/review/:reviewId/', controllers.create);
// app.put('/api/review/:reviewId', controllers.review.update);



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
