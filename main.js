$(document).ready(function() {
	
	var currInt = 5;
	var currWork = 25;
	var alarm = new Audio("https://clyp.it/wid2xmve.mp3");	
	
	$("#stop").hide();
	
	$("#intMinus").on("click", function() {
		if (currInt > 0) {
			currInt--;
			$("#breakTime").html(currInt);
		}
	});
	
	$("#intPlus").on("click", function () {
		if (currInt >= 0) {
			currInt++;
			$("#breakTime").html(currInt);
		}
	});
	
	$("#workMinus").on("click", function () {
		if (currWork > 0) {
			currWork -= 5;
			$("#workTime").html(currWork);
		}
	});
	
	$("#workPlus").on("click", function () {
		if (currWork >= 0) {
			currWork += 5;
			$("#workTime").html(currWork);
		}
	});
		
	
	$("#start").click(function () {
		var work = parseInt($("#workTime").text()),
			rest = parseInt($("#breakTime").text()),
		    counter = setInterval(timer, 1000);
			
		work*=60;	
		rest*=60;
		
		function timer () {
			$("#start, #intMinus, #intPlus, #workMinus, #workPlus, #reset").hide();
			$("#stop").show();
			
			if (work === 0) {
				clearInterval(counter);	
				alarm.play();
				var startBreak = setInterval(breakTimer, 1000);
			} else {
				work-=1;
			}
			
			if (work % 60 >= 10) {
				$("#clock").html("Work<br>" + Math.floor(work / 60) + ":" + work % 60);
			} else {
				$("#clock").html("Work<br>" + Math.floor(work / 60) + ":0" + work % 60);
			}
			
			function breakTimer() {
				
				if (rest === 0) {
					clearInterval(startBreak);
					alarm.play();
				} else {
					rest-=1;
				}				
				
				if (rest % 60 >= 10) {
					$("#clock").html("Rest<br>" + Math.floor(rest / 60) + ":" + rest % 60);
				} else {
					$("#clock").html("Rest<br>" + Math.floor(rest / 60) + ":0" + rest % 60);
				}
			}
			
			$("#stop").click(function () {
				clearInterval(counter);
				clearInterval(startBreak);
				$("#stop").hide();
				$("#reset").show();
			});
		}
	});
	
	
	
	$("#reset").click(function () {
		$("#workTime").html(25);
		$("#breakTime").html(5);
		$("#start, #intMinus, #intPlus, #workMinus, #workPlus").show();
		$("#clock").html("Time<br>is an<br>Illusion");
	});
});