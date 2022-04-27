// render tweets when document is loaded
$(document).ready(function() {
  
  loadTweets();
  
  $('form').submit(function(event) {
    event.preventDefault();
    const formData = $(this).serialize();
    if (formData.length <= 5) {
      alert('Tweet cannot be empty');
    } else if (formData.length > 145) {
      alert('Tweet length cannot exceed 140 characters');
    } else {
      $.post('/tweets', formData, function() {
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

// create a tweet
const createTweetElement = function(tweet) {
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
        <label>${tweet.content.text}</label>
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