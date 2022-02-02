/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

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

    const createTweetElement = function($tweet) {
      const userHandle = $tweet.user.handle;
      const userName = $tweet.user.name;
      const userAvatar = $tweet.user.avatar;
      const tweetText = $tweet.content.text;
      const tweetTime = timeago.format($tweet.created_at);
      const completeTweet = $(`<article class="tweet"><header id="tweetheader"><div><img src="${userAvatar}"><p>${userName}</p></div><p>${userHandle}</p></header><div id="tweet-content"><p>${tweetText}</p></div><footer id="tweet-footer"><p>${tweetTime}</p><div class="tweet-icons"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></div></footer></article>`);
      return completeTweet;
    };

  const $tweet = createTweetElement(tweetData);

  console.log($tweet)


  const renderTweets = function($tweets) {
    for (const tweet of $tweets) {
      const renderedTweet = createTweetElement(tweet)
      $('#tweets-container').append(renderedTweet);
    }
  };

  renderTweets(data);

  // timeago.format(1473245023718);

});

