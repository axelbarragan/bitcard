/*
** MAIN.JS
** Bitcard
*/

$(document).ready(function() {
	var navbar = $('.navbar');
	$(window).scroll(function() {
		var altura = $(window).scrollTop();
		if(altura>=100) {
			$(navbar).addClass('navbar-color');
		} else {
			$(navbar).removeClass('navbar-color');
		}
	});
});