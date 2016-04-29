$(document).ready(function() {
	
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




	$('.about-slideshow img:gt(0)').hide();
	$(function(){
   		$('.about-slideshow img:gt(0)').hide();
    	setInterval(function(){
      		$('.about-slideshow :first-child').fadeOut()
         	.next('img').fadeIn()
         	.end().appendTo('.about-slideshow');}, 
    	3000);
	});

	$('.lander-slideshow img:gt(0)').hide();
	$(function(){
   		$('.lander-slideshow img:gt(0)').hide();
    	setInterval(function(){
      		$('.lander-slideshow :first-child').fadeOut()
         	.next('img').fadeIn()
         	.end().appendTo('.lander-slideshow');}, 
    	3000);
	});
});
