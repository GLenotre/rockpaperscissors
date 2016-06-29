$(function() {

	"use strict";

	var scissorsGame;
	var totalSeconds = 15;
	var inputNumber = 15;
	var timerOn = false;
	var sessionStart = false;
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
		inputNumber = totalSeconds;  // assigns the User's timer input into inputNumber
	});

	$("#sixtyLess").on("click", function(){
		if (totalSeconds >=60) {
		    totalSeconds -= 60;
		    Mins = Math.floor(totalSeconds / 60);
			$("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
			inputNumber = totalSeconds;  // assigns the User's timer input into inputNumber
		}
	});
	
	$("#oneMore").on("click", function(){
	    totalSeconds += 1;
	    Seconds = totalSeconds % 60;
		$("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
		inputNumber = totalSeconds;  // assigns the User's timer input into inputNumber
	});

	$("#oneLess").on("click", function(){
	    if (totalSeconds >0) {
		    totalSeconds -= 1;
			Seconds = totalSeconds % 60;
			$("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
			inputNumber = totalSeconds;  // assigns the User's timer input into inputNumber
		  }
	});
	    
	    $('.play').click(function(){
			win = 0;
			$('.win').html('Win: ' + win); 
			lose = 0;
			$('.lose').html('Lose: ' + lose);    
			draw = 0;
			$('.draw').html('Draw: ' + draw); 

			if (sessionStart) {  // if the User already has played a game, then use inputNumber
				if (!timerOn) {
			    timerOn = true;
			    scissorsGame = setInterval(function() {
			        Mins = Math.floor(inputNumber / 60);
			        Seconds = inputNumber % 60;
			        if (inputNumber >= 1) {
			            inputNumber -= 1;
				        $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
				        if (inputNumber < 10) {
				        $("#timer").fadeOut(500);
				        $("#timer").fadeIn(500);
				        }
			        } else {
			        $("#timer").text(Mins + ":" + (Seconds < 10 ? "0" + Seconds : Seconds));
			        clearInterval(scissorsGame);

			        timerOn = false;

			        if (win !== 0 || draw !== 0 || lose !== 0) {
				        if (win === lose) {
					    	$('.draw').html('YOU DREW!: ' + draw);
				        }
				        
				        else if (win > lose) {
					        $('.win').html('YOU WON with ' + win + ' points!');   
				        }

				        else if (lose > win) {
					        $('.lose').html('YOU LOST!: ' + lose);
				        }
				    }  // ends if win/draw/lost result statement
			        } // ends if (totalSeconds >= 1) else statement  
			    }, 1000);  //ends set interveral
				} // ends if !timerOn statement		

			} else {  // if the User has NOT already played a game, then use totalSeconds
				sessionStart = true;
			    if (!timerOn) {
			    timerOn = true;
			    totalSeconds;

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
			        timerOn = false;

			        if (win !== 0 || draw !== 0 || lose !== 0) {
				        if (win === lose) {
					    	$('.draw').html('YOU DREW!: ' + draw);
				        }
				        
				        else if (win > lose) {
					        $('.win').html('YOU WON with ' + win + ' points!');   
				        }

				        else if (lose > win) {
					        $('.lose').html('YOU LOST!:' + lose);
				        }
				    }  // ends if win/draw/lost result statement
			        } // ends if (totalSeconds >= 1) else statement  
			    }, 1000);  //ends set interveral
				} // ends if !timerOn statement				
			} // ends if else sessionStart
		});  //ends #play click function

	    $('.choice').click(function(){
	    var userChoice = $(this).data('id');
	    if (timerOn === true) {
		
		var botChoice = Math.floor((Math.random() * 3)+1);
		$(".botChoice").hide();  // hides the computer's hands
			if (botChoice === 1) {
				$("#botChoice1").show();
			}
			if (botChoice === 2) {
				$("#botChoice2").show();
			}
			if (botChoice === 3) {
				$("#botChoice3").show();
			}

		    if (userChoice === botChoice) {
		        draw++;
		    	$('.draw').html('Draw: ' + draw); 
		    	$('#drawSound')[0].play();
		    }

		    if (userChoice === 2) {
		        if (botChoice === 1) {
		        win++;
		        $('.win').html('Win: ' + win);   
		        $('#winSound')[0].play();
		         
		        } else if (botChoice === 3) {
		        lose++;
		        $('.lose').html('Lose: ' + lose);
		        $('#loseSound')[0].play();
		        }
		    
		    } else if (userChoice === 3) {
		        if (botChoice === 1) {
		    	lose++;
		        $('.lose').html('Lose: ' + lose);
		        $('#loseSound')[0].play();
		        } else if (botChoice === 2) {
		        win++;
		        $('.win').html('Win: ' + win);
		        $('#winSound')[0].play();
		    }
		    
			} else if(userChoice === 1) {
		    if (botChoice === 2) {
		        lose++;
		        $('.lose').html('Lose: ' + lose);
		        $('#loseSound')[0].play();
		    } else if (botChoice === 3) {
		    	win++;
		        $('.win').html('Win: ' + win); 
		        $('#winSound')[0].play();
		    }
	    	}  // ends last elseif
	    }  // ends if timerOn condition
    });  // ends click function
});