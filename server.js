// SERVER-SIDE JAVASCRIPT

var express = require('express'),
    database = require('./models'),
    app = express();


// serve static files from public folder
app.use(express.static(__dirname + '/public'));


/**********
 * ROUTES *
 **********/

/*
 * HTML ENDPOINTS
 */
app.get('/', function homepage(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/elephant', function homepage(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/views/elephant.html');
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
/*
 * JSON API Endpoints
 */

//app.get('/api', controllers.api.index);

//app.get('/api/field', controllers.fields.index);
//app.get('/api/field/:fieldId', controllers.field.show);
//app.post('/api/albums', controllers.field.create);
//app.post('/api/albums/:albumId/', controllers..create);










/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
