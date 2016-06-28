$(function() {

	"use strict";

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
	    }
	    TimerOn = true;
	    scissorsGame = setInterval(function() {
	        Mins = Math.floor(totalSeconds / 60);
	        Seconds = totalSeconds % 60;
	        if (totalSeconds >= 1) {
	            totalSeconds -= 1;
		        $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
		        if (totalSeconds < 10) {
		        $("#timer").fadeOut(500);
		        $("#timer").fadeIn(500);
		        }
	        } else {
	        $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
	        clearInterval(scissorsGame);  
	        TimerOn = false;
	        }
	    }, 1000);  //ends setinterveral
	    
	});  //ends click function

	    function winner() {

		    $('.choice').click(function(e){
		    var userChoice = $(this).data('id');
			console.log(userChoice);
		    if (TimerOn == true) {
			
			var botChoice = Math.floor((Math.random() * 3)+1);

			    if (userChoice === botChoice)
			        $('#draw').get(0).play();

			    if (userChoice === 2) {
			        if (botChoice == 1) {
			        $('#win').get(0).play();
			    } else if (botChoice === 3) {
			        $('#lose').get(0).play();
			    }
			    
			    } else if (userChoice === 3) {
			    if (botChoice == 1) {
			      $('#lose').get(0).play();
			    } else if (botChoice === 2) {
			      $('#win').get(0).play();
			    }
			    
				} else if(userChoice == 1) {
			    if (botChoice === 2) {
			      $('#lose').get(0).play();
			    } else if (botChoice === 3) {
			      $('#win').get(0).play();
			    }
		    	}  // ends last elseif
		    }  // ends if TimerOn condition
	    });  // ends click function
	} // ends function winner

	winner();

});