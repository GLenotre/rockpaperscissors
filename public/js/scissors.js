
'use strict';

var scissorsGame;
var totalSeconds = 60;
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
    totalSeconds -= 60;
    Mins = Math.floor(totalSeconds / 60);
    $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
    console.log(totalSeconds);
    console.log(Mins);
    console.log(Seconds);
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
    totalSeconds -= 1;
    Mins = Math.floor(totalSeconds / 60);
    Seconds = Math.floor(totalSeconds % 60);
    $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
    console.log(totalSeconds);
    console.log(Mins);
    console.log(Seconds);
  }