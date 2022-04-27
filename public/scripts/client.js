/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  renderTweets(data);
});

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
};
  
const createTweetElement = function(tweet) {
  let $tweet = $(
    `<article class="tweet">
    <header>
    <div>
    <img src="${tweet.user.avatars}"></img>
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