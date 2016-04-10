/* CLIENT-SIDE JS
 *
 * This page control behaviors on the front-end.
 *
 */

 //$.ajax ({
 //   method: 'GET',
 //   url: 'api/fields',
 //   success: renderS,
 //   error: ajaxError
 //   });

function ajaxError(data){
  console.log("Ajax returned error" + data);
}

function renderS(data){
  console.log('rendering data', data);
  var fieldHtml = $('#review-template').html();
  var fieldTemplate = Handlebars.compile(fieldHtml);
  var html = fieldTemplate({fields: data});
  console.log(html);
  $('#field').prepend(html);

}


$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/fields').success(function (fields){
      renderS(fields);
  });

});

$('#select').on('select', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/field', formData, function(field) {
      renderAlbum(field);  //render the server's response
    });
    $(this).trigger("reset");
  });
