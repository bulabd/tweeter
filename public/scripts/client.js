// render tweets when document is loaded
$(document).ready(function() {
  
  loadTweets();
  
  $('form').submit(function(event) {
    event.preventDefault();
    const formData = $(this).serialize();
    if (formData.length <= 5) {
      $('#error1').slideDown("fast", function() {
        $('#error1').css('display', 'flex');
      });
    } else if (formData.length > 145) {
      $('#error2').slideDown("fast", function() {
        $('#error2').css('display', 'flex');
      });
    } else {
      $.post('/tweets', formData, function() {
        $('output').text('140');
        $('#error1').slideUp("fast", function() {
          $('#error1').css('display', 'none');
        });
        $('#error2').slideUp("fast", function() {
          $('#error2').css('display', 'none');
        });
        $('#tweet-text').val('');
        $('#tweets-container').empty();
        loadTweets();
      });
    }
  });
});

// function to render tweets using an ajax get request
const loadTweets = function() {
  $.ajax('/tweets', {method: 'GET'})
  .then((res) => renderTweets(res));
};

// loop through tweets array and append each of them
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $('#tweets-container').prepend(createTweetElement(tweet));
  }
};

// escape function to prevent XSS
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// create a tweet
const createTweetElement = function(tweet) {
  const safeHTML = `<label>${escape(tweet.content.text)}</label>`;
  let $tweet = $(`
    <article class="tweet">
      <header>
        <div>
          <img src="${tweet.user.avatars}" alt="An avatar"></img>
          <h3 class="person-name">${tweet.user.name}</h3>
        </div>
        <h3 class="person-nickname">${tweet.user.handle}</h3>
      </header>
      <div class="tweet-sentence">
        ${safeHTML}
      </div>
      <footer>
        <p>${timeago.format(tweet.created_at)}</p>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`
  );
  return $tweet;
};