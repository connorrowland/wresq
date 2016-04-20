$(document).ready(function() {

	//Fade out the homepage lander photo and text as user scrolls down
	$(window).scroll(function(){
	    $(".lander-image-container").css("opacity", 1 - $(window).scrollTop() / 900);
	  });
	//////////////////////////////



	//Fade out non homepage lander photos
	$(window).scroll(function(){
	    $(".non-homepage-image").css("opacity", 1 - $(window).scrollTop() / 1900);
	  });
	//////////////////////////////

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
	//////////////////////////////

	// //Practice areas link transitions
	// $("#overview-services-link-box").children().click(function(){
	// 	var clicked = event.target;
	// 	$('html, body').animate({
	//         scrollTop: $(clicked).offset().top
	//     }, 2000);
	// });

	$("#overview-services-link-box").delegate("a","click",function(){
		$('html, body').animate({
	        scrollTop: $(this).offset().top
	    }, 1000);
	});
	//////////////////////////////

	//About page image slideshow
	// $('.img-wrap img:gt(0)').hide();

	// $('.next').click(function() {
	//     $('.img-wrap img:first-child').fadeOut().next().fadeIn().end().appendTo('.img-wrap');
	// });

	// $('.prev').click(function() {
	//     $('.img-wrap img:first-child').fadeOut();
	//     $('.img-wrap img:last-child').prependTo('.img-wrap').fadeOut();
	//     $('.img-wrap img:first-child').fadeIn();
	// });
	//////////////////////////////


	// //responsive menu

	// var hamburgerIcon = $("#hamburgerIcon");
	// var xOutMenu = $("#xOut");

	// //adds a class of hidden which to hamburgerIcon sets the hamburger icon's dispaly to none, making it invisible
	//   hamburgerIcon.click(function (){
	//     $("nav").toggle();
	//     // $(this).addClass("hidden");
	//     // $(xOutMenu).removeClass("hidden");
	//   });

	//   //adds a class of hidden to the X out P tag which sets it's dispaly to none, making it invisible.
	//   $(xOutMenu).click(function () {
	//     $("nav").toggle();
	//     // hamburgerIcon.removeClass("hidden");
	//     // $("nav").addClass("hidden");
	//   });
	//////////////////////////////


	//lander slideshow

	$(".lander-slideshow img:gt(0)").hide();
	setInterval(function() { 
		$('.lander-slideshow img:first-child').fadeOut()
		.next('img').fadeIn()
		.end().appendTo('.lander-slideshow');
	},3000);


});
