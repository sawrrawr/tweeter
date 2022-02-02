/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

    const createTweetElement = function($tweet) {
      const userHandle = $tweet.user.handle;
      const userName = $tweet.user.name;
      const userAvatar = $tweet.user.avatars;
      const tweetText = $tweet.content.text;
      const tweetTime = timeago.format($tweet.created_at);
      const completeTweet = $(`
        <article>
          <header id="tweetheader">
            <div>
              <img src="${userAvatar}">
              <p>${userName}</p>
            </div>
            <p>${userHandle}</p>
          </header>
          <p><strong>${tweetText}</strong></p>
          <footer id="tweet-footer">
            <p>${tweetTime}</p>
              <div class="tweet-icons">
                <i class="fa-solid fa-flag"></i>
                <i class="fa-solid fa-retweet"></i>
                <i class="fa-solid fa-heart"></i>
              </div>
          </footer>
          </article>
       `);
      return completeTweet;
    };

  const renderTweets = function($tweets) {
    for (const tweet of $tweets) {
      const renderedTweet = createTweetElement(tweet)
      $('#tweets-container').append(renderedTweet);
    }
  };


  //event listener on form submit
  $("form").submit(function( event ) {
    event.preventDefault();
    const result = $("form").serialize()
    if (!result) {
      alert(`This is an empty tweet!`)
    } else if (result.length > 145) {
      alert(`Your tweet needs to be less than 140 characters. Try again!`);
    } else {
    $.post('/tweets', result).then(function() {
 console.log('success', result);
    });
    $("form").empty();
    loadTweets();
  }
  });

  const loadTweets = function() {
    $.get('/tweets').then(function(data) {
      renderTweets(data);
    })
  };
  loadTweets();

});

