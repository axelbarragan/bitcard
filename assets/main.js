/*
** MAIN.JS
** Bitcard
*/

$(document).ready(function() {
	var navbar = $('.navbar');
	$(window).scroll(function() {
		$('.navbar-collapse').collapse('hide');
		var altura = $(window).scrollTop();
		if(altura>=100) {
			$(navbar).addClass('navbar-color');
		} else {
			$(navbar).removeClass('navbar-color');
		}
	});

	$("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });

	//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$(document).on('click', 'a.page-scroll', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top-25
			}, 1200, 'easeInOutExpo');
		event.preventDefault();
  });
});

});