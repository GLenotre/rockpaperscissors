$(function() {

	"use strict";

	var scissorsGame;
	var totalSeconds = 30;
	var TimerOn = false;
	var Mins = Math.floor(totalSeconds / 60);
	var Seconds = totalSeconds % 60;
	$("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
	var win = 0;
	var lose = 0;
	var draw = 0;

	$("#sixtyMore").on("click", function(){
		totalSeconds += 60;
		Mins = Math.floor(totalSeconds / 60);
		$("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
		console.log(totalSeconds);
	});

	$("#sixtyLess").on("click", function(){
		if (totalSeconds >=60) {
		    totalSeconds -= 60;
		    Mins = Math.floor(totalSeconds / 60);
			$("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
		}
		console.log(totalSeconds);
	});
	
	$("#oneMore").on("click", function(){
	    totalSeconds += 1;
	    Seconds = totalSeconds % 60;
		$("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
		console.log(totalSeconds);
	});

	$("#oneLess").on("click", function(){
	    if (totalSeconds >0) {
		    totalSeconds -= 1;
			Seconds = totalSeconds % 60;
			$("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
		  }
		  console.log(totalSeconds);
	});

	  $('#play').click(function(){
	    if (!TimerOn) {
	    TimerOn = true;
	    totalSeconds = 30;
	    win = 0;
		$('.win').html('Win: ' + win); 
	    lose = 0;
	    $('.lose').html('Lose: ' + lose);
	    draw = 0;
	    $('.draw').html('Draw: ' + draw); 

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
		} // ends if statement
	});  //ends click function

	    $('.choice').click(function(e){
	    var userChoice = $(this).data('id');
		console.log(userChoice);
	    if (TimerOn === true) {
		
		var botChoice = Math.floor((Math.random() * 3)+1);
		console.log(botChoice);

		    if (userChoice === botChoice) {
		        draw++;
		    	$('.draw').html('Draw: ' + draw); 
		    }

		    if (userChoice === 2) {
		        if (botChoice === 1) {
		        win++;
		        $('.win').html('Win: ' + win);   
		        // $('.win')[0].play();
		         
		        } else if (botChoice === 3) {
		        lose++;
		        $('.lose').html('Lose: ' + lose);
		        // $('.lose')[0].play();
		        }
		    
		    } else if (userChoice === 3) {
		        if (botChoice === 1) {
		    	lose++;
		        $('.lose').html('Lose: ' + lose);
		        // $('.lose')[0].play();
		        } else if (botChoice === 2) {
		        win++;
		        $('.win').html('Win: ' + win);
		        // $('.win')[0].play();
		    }
		    
			} else if(userChoice === 1) {
		    if (botChoice === 2) {
		        lose++;
		        $('.lose').html('Lose: ' + lose);
		        // $('.lose')[0].play();
		    } else if (botChoice === 3) {
		    	win++;
		        $('.win').html('Win: ' + win); 
		        // $('.win')[0].play();
		    }
	    	}  // ends last elseif
	    }  // ends if TimerOn condition
    });  // ends click function
});