$(document).ready(function() {
	
	//IS THIS SHIT WORKING YET?!
	
	$(".dropdown").mouseenter(function() {
		$(this).css("background-color", "white");
	});

	$(".dropdown").mouseleave(function() {
		$(this).css("background-color", "black");
	});

	$("#myName").mouseenter(function() {
		$(this).css("background-color", "white");
		$(this).css("color", "black");
	});

	$("#myName").mouseleave(function() {
		$(this).css("background-color", "#3374ad");
		$(this).css("color", "white");
	});

	$(window).scroll(function() {
		// If page is scrolled more than 50px
		if ($(this).scrollTop() >= 50) {   
			// Fade in the arrow
			$('#scrollUp').fadeIn(200);    
		} else {
			$('#scrollUp').fadeOut(200);  
		}
	}); 

	// When arrow is clicked
	$('#scrollUp').click(function() {      
		$('body, html').animate({
			 // Scroll to top of body
			scrollTop : 0                      
		}, 500);
	}); 


});
