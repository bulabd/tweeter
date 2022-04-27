/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  };
  
  const createTweetElement = function(object) {
    return (
    `<article class="tweet">
      <header>
        <div>
          <img src="${object.user.avatars}"></img>
          <h3 class="person-name">${object.user.name}</h3>
        </div>
        <h3 class="person-nickname">${object.user.handle}</h3>
      </header>
      <div class="tweet-sentence">
        <label>${object.content.text}</label>
      </div>
      <footer>
        <p>${object.created_at}</p>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`
    );
  };
  
  const $tweet = createTweetElement(tweetData);
  
  console.log($tweet);
  
  $('#tweets-container').append($tweet);

});


