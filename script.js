var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";


var getQuote = function(json){
  var quoteText = json.quoteText;
  var quoteAuthor = json.quoteAuthor;

  if (quoteAuthor==""){
    quoteAuthor = "unknown";
  } 

  tweetUrl = "https://twitter.com/intent/tweet?text=" + quoteText + " " + quoteAuthor;
  $("#quotetext").text(quoteText);
  $("#quoteauthor").text("Author: " + quoteAuthor);
};

$(document).ready(function(){
  $("#quote").on("click", function(){
    $.getJSON(url, getQuote);
  });
});


$(document).ready(function(){
  $("#tweet").on("click", function(){
    // url = "https://twitter.com/intent/tweet?" + "text=" + text;
    window.open(tweetUrl);
  });
});


