var counter = 3;

function upvote() {
 counter = counter + 1;

 document.getElementById("votes")
  .innerHTML = counter + " votes";
}

function downvote() {
 counter = counter - 1;

 document.getElementById("votes")
  .innerHTML = counter + " votes";
}
