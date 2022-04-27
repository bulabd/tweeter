// render tweets when document is loaded
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    const formData = $(this).serialize();
    $.ajax({
      action: '/tweets',
      method: 'POST',
      data: formData
    })
      // .then((res) => data.push(res));
  });

  const loadTweets = function() {
    $.ajax('/tweets', {method: 'GET'})
      .then((res) => renderTweets(res));
  };

  loadTweets();
});

// loop through tweets array and append each of them
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
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
        <p>${tweet.created_at}</p>
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