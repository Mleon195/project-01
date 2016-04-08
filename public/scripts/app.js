/* CLIENT-SIDE JS
 *
 * This page control behaviors on the front-end.
 *
 */

$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/reviews').success(function (reviews) {
    reviews.forEach(function(review) {
      renderReview(review);
    });
  });

});
