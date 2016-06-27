
'use strict';

var scissorsGame;
var totalSeconds = 100;
var TimerOn = false;
var Mins = Math.floor(totalSeconds / 60);
var Seconds = totalSeconds % 60;
$("#message").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));

function increaseMinutes() {
    totalSeconds += 60;
    Mins = Math.floor(totalSeconds / 60);
    $("#message").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
   console.log(totalSeconds);
    console.log(Mins);
    console.log(Seconds);
  }

function decreaseMinutes() {
    totalSeconds -= 60;
    Mins = Math.floor(totalSeconds / 60);
    $("#message").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
    console.log(totalSeconds);
    console.log(Mins);
    console.log(Seconds);
  }

  $('#play').click(function(){
  if (TimerOn){
  return;
} else {
  TimerOn = true;
  scissorsGame = setInterval(function() {
    Mins = Math.floor(totalSeconds / 60);
    Seconds = totalSeconds % 60;
    if (totalSeconds >= 1) {
      totalSeconds -= 1;
      $("#message").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
    } else {
      $('#trumpet').get(0).play();
      $("#message").text("Take a break.");
      clearInterval(scissorsGame);  
    }
    console.log(totalSeconds);
    console.log(Mins);
    console.log(Seconds);
  }, 1000);  
} // closes first if 
});

function timerStop() {
  clearInterval(scissorsGame);   // pauses the interval
  TimerOn = false;
}