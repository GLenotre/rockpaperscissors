
'use strict';

var scissorsGame;
var totalSeconds = 30;
var TimerOn = false;
var Mins = Math.floor(totalSeconds / 60);
var Seconds = totalSeconds % 60;
$("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));

function increaseMinutes() {
    totalSeconds += 60;
    Mins = Math.floor(totalSeconds / 60);
    $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
   console.log(totalSeconds);
    console.log(Mins);
    console.log(Seconds);
  }

function decreaseMinutes() {
    if (totalSeconds >=60) {
	    totalSeconds -= 60;
	    Mins = Math.floor(totalSeconds / 60);
	    $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
	    console.log(totalSeconds);
	    console.log(Mins);
	    console.log(Seconds);	
    }
  }

 function increaseSeconds() {
    totalSeconds += 1;
    Mins = Math.floor(totalSeconds / 60);
	Seconds = Math.floor(totalSeconds % 60);
    $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
   console.log(totalSeconds);
    console.log(Mins);
    console.log(Seconds);
  }

function decreaseSeconds() {
    if (totalSeconds >0) {
	    totalSeconds -= 1;
	    Mins = Math.floor(totalSeconds / 60);
	    Seconds = Math.floor(totalSeconds % 60);
	    $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
	    console.log(totalSeconds);
	    console.log(Mins);
	    console.log(Seconds);
	  }
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
      $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
    } else {
      $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
      clearInterval(scissorsGame);  
      TimerOn = false;
    }
    console.log(totalSeconds);
    console.log(Mins);
    console.log(Seconds);
    console.log(TimerOn);
  }, 1000);  
} // closes first if 
});

// function timerStop() {
//   clearInterval(scissorsGame);   // pauses the interval
//   TimerOn = false;
// }