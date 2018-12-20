/*
** MAIN.JS
** Bitcard
*/

$(document).ready(function() {
	var navbar = $('.navbar');
	var navbarToggler = $('.navbar-toggler');
	var navbarCollapse = $('.navbar-collapse');
	$(window).scroll(function() {
		$('.navbar-collapse').collapse('hide');
		var altura = $(window).scrollTop();
		if(altura>=100) {
			$(navbar).addClass('navbar-color');
		} else {
			$(navbar).removeClass('navbar-color');
		}
	});

	//Scroll
$(function() {
	$(document).on('click', 'a.page-scroll', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top-25
			}, 1200, 'easeInOutExpo');
		event.preventDefault();
  });
});

if(isMobile.any()){
   alert("ES MOVIL");
}


});