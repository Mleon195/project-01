/* CLIENT-SIDE JS
 *
 * This page control behaviors on the front-end.
 *
 */

 /* CLIENT-SIDE JS
 *
 * This page control behaviors on the front-end.
 *
 */



  $.ajax ({
     method: 'GET',
     url: 'api/fields',
     success: renderS,
     error: ajaxError
     });

function ajaxError(data){
  console.log("Ajax returned error" + data);
}

function renderS(data){
  console.log('rendering data', data);
  var fieldHtml = $('#field-template').html();
  var fieldTemplate = Handlebars.compile(fieldHtml);
   htmlTemplate = fieldTemplate({fields: data});
   console.log(htmlTemplate);
  $('#field').prepend(htmlTemplate);

}



function postNewFiend (data) {
  console.log(data, "post success");
}

function ajaxPostError (data) {
  console.log(data, "Post Error");
}
// serialize select box in homepage


// function addSelectorListner(){
//   $('#select').change( function(e) {
//     e.preventDefault();
//     // var formData = $(this).serialize();
//     // console.log("this is selected", $(this).serialize());
//     var selectedField = $('#select option:selected').text();
//     // var flist = fieldList[i];
//     if(flist.name === selectedField){
//       // console.log("(43) Field name is" + flist.reviews);
//       for (var i = 0; i < fieldList.length; i++) {
//       // console.log(flist)
//       // console.log(fieldList[i].name);
//         console.log("Field name is " + flist.name);
//          console.log("Hello");
//         //  for (var i = 0; i < fieldList.length; i++) {
//            console.log(fieldList[i].reviews[0].text);
//            renderReviews(fieldList[i].reviews[0].text);
//         //  }
//       }
//     }
//     console.log(selectedField);//('formData', formData);
//
//
//     $(this).trigger("reset");
//   });
// }

function addSelectorListner(){
  $('#select').change( function(e) {
    for (var i = 0; i < fieldList.length; i++) {
      if (fieldList2[i].name === $(this).val()) {
        console.log(fieldList2[i].reviews.text);
      }
    }
  });
}

//populate the review section on the homepage
function renderReviews(review){
  console.log('rendering data', review);
  var reviewHtml = $('#review-template').html();
  var reviewTemplate = Handlebars.compile(reviewHtml);
  var html = reviewTemplate({reviews: reviews});
  console.log(html);
  $('#reviews').prepend(html);

}

var fieldList;
$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/fields').success(function (fields){
      fieldList = fields;
      renderS(fields);
      addSelectorListner();
  });


  $('#submitButton').click( function(e){
    console.log('submit works');
    e.preventDefault();
    var serializedForm = $('.form-horizontal form').serialize();
    console.log(serializedForm);
    $.ajax ({
      method: 'POST',
      url: 'api/fields',
      data: serializedForm,
      // success: postNewField,
      // error: ajaxPostError
    });
  });


});






// this function takes reviews and renders it to the page
// catch and handle the click on an add review button
  //$('#review').on('click', '.add-review', handleAddReviewClick);

  // save review save button
  //$('#saveReview').on('click', handleNewReviewSubmit);
//});

// create new reviews
