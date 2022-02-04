$(document).ready(function() {
  console.log(`ready for jQuery!`);

  $("#tweet-text").on("input", function() {
    const lettersRemain = 140 - this.value.length;
    const counter = $(this).siblings().children().eq(1);
    $(counter).text(lettersRemain);
    if (lettersRemain <= 0) {
      $(counter).addClass("overage");
    } else {
      $(counter).removeClass("overage");
    }
  });
  
});