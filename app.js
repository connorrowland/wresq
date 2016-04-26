$(document).ready(function() {
	
	//////////////////////////////
	//FADE OPACITY LANDER PHOTO ON SCROLL
	$(window).scroll(function(){
	    $(".lander-image-container").css("opacity", 1 - $(window).scrollTop() / 900);
	});

	//////////////////////////////
	//FADE OPACITY OF NON LANDER IMG HEADER
	$(window).scroll(function(){
	    $(".non-homepage-image").css("opacity", 1 - $(window).scrollTop() / 1900);
	  });

	//////////////////////////////
	//PAGE TRANSITIONS
	$('body').css('display', 'none');
	$('body').fadeIn(1000);
	$('.nav-links').click(function() {
		event.preventDefault();
		newLocation = this.href;
		$('body').fadeOut(1000, newpage);
	});
	function newpage() {
		window.location = newLocation;
	}

	/////////////////////////////
	//RESPONSIVE NAV

	var hamburgerMenu = $(".hamburger-menu");
	var alternateHamburgerMenu = $(".alternate-hamburger-menu");

	hamburgerMenu.click(function () {
		$(".responsive-nav").slideToggle(500);
	});
	alternateHamburgerMenu.click(function () {
		$(".responsive-nav").slideToggle(500);
	});
});
