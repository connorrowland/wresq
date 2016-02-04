$(document).ready(function() {

	//Fade out the lander photo and text as user scrolls down
	$(window).scroll(function(){
	    $("#lander-photo-box").css("opacity", 1 - $(window).scrollTop() / 1400);
	  });

	//Page transitions
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

	// //Practice areas link transitions
	// $("#overview-services-link-box").children().click(function(){
	// 	var clicked = event.target;
	// 	$('html, body').animate({
	//         scrollTop: $(clicked).offset().top
	//     }, 2000);
	// });
	$("#overview-services-link-box").delegate("a","click",function(){
		slowScroll();
	});
	function slowScroll () {
		$('html, body').animate({
	        scrollTop: $(clicked).offset().top
	    }, 2000);
	}

	//About page image slideshow
	$('.img-wrap img:gt(0)').hide();

	$('.next').click(function() {
	    $('.img-wrap img:first-child').fadeOut().next().fadeIn().end().appendTo('.img-wrap');
	});

	$('.prev').click(function() {
	    $('.img-wrap img:first-child').fadeOut();
	    $('.img-wrap img:last-child').prependTo('.img-wrap').fadeOut();
	    $('.img-wrap img:first-child').fadeIn();
	});

});
