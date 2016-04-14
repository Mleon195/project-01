var db =require('../models');

//GET /api/reviews
function second(req, res){
  db.reviews.find({}, function(err, findreviews){
  console.log("We have reviews: ", review);
  res.json(reviews);
  });
}
