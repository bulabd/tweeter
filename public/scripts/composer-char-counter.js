// logic to display character count
$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    let count = $("#tweet-text").val().length;
    let counter = 140 - count;
    // display counter with each addition or substraction of characters
    $('output').text(counter);
    if (counter < 0) {
      // turn the counter red if more than 140 characters have been entered
      $('output').css('color', 'red');
    } else {
      $('output').css('color', '#545149');
    }
  })
});