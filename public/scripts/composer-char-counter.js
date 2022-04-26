$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    let count = $("#tweet-text").val().length;
    let counter = 140 - count;
    $('output').text(counter);
    if (counter < 0) {
      $('output').css('color', 'red');
    } else {
      $('output').css('color', '#545149');
    }
  })
});