var kanye = 0;
var barbara = 0;
var taylor = 0;
var oprah = 0;
var daniel = 0;
var steve = 0;

$(document).ready(function(){
  $("#questions").submit(function(event){
    var age = $("input#age").val();
    var food = $("#food").val();
    var hat = $("#hat").val();
    var color = $("#color").val();
    if (age > 40) {
      if(food === "1") {
        barbara +=1;
      } else if(food === "2") {
        oprah+=1;
      } else if(food === "3") {
        steve +=1;
      }
      if(hat === "1") {
        barbara +=1;
      } else if(hat === "2") {
        oprah+=1;
      } else if(hat === "3") {
        steve +=1;
      }
      if(color === "1") {
        barbara +=1;
      } else if(color === "2") {
        oprah+=1;
      } else if(color === "3") {
        steve +=1;
      }

      if (barbara >= steve && barbara > oprah) {
        $("#barbara-walters").show();
      } else if (steve > oprah) {
        $("#steve-buscemi").show();
      } else {
        $("#oprah").show();
      }
    } else {
      if(food === "1") {
        taylor +=1;
      } else if(food === "2") {
        kanye +=1;
      } else if(food === "3") {
        daniel +=1;
      }
      if(hat === "1") {
        taylor +=1;
      } else if(hat === "2") {
        kanye +=1;
      } else if(hat === "3") {
        daniel +=1;
      }
      if(color === "1") {
        taylor +=1;
      } else if(color === "2") {
        kanye +=1;
      } else if(color === "3") {
        daniel +=1;
      }

      if(taylor >= daniel && taylor > kanye) {
        $("#taylor-swift").show();
      } else if (daniel > taylor){
        $("#daniel-radcliffe").show();
      } else {
        $("#kanye-west").show();
      }
    }

    event.preventDefault();
  });
});
