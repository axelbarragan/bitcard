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
		var idTop = "#top";
		if($(this).attr('href') == idTop) {
			var valor = 100;
		} else {
			var valor = 25;
		}
		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-valor}, 1200, 'easeInOutExpo');
		event.preventDefault();
  });
});



});