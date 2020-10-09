//Self invoking anynomous function with jQuery as parameter
(function($){
	//1st element where we want to target, 2nd object
	var typed = new Typed('span.txt-rotate',{
		strings: ["VA-11 HALL-A"],
		typeSpeed: 100,
		backSpeed: 100,
		fadeOut: false,
		smartBackspace: true,
		loop: true
	});
})(jQuery);

$(document).ready(function(){
	$('.projects-wrapper').isotope({
		filter: '*',
		layoutMode: 'masonry'
	});

	$('.list-filter a').click(function(){
		var selector = $(this).attr('data-filter');
		$('.list-filter a').removeClass('active');
		$(this).addClass('active');
		$('.projects-wrapper').isotope({
			filter: selector
		});
		return false;
	});

	$('.popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		gallery: {
			enabled: true,
			navigateByImgClick: true
		}
	});
	
	$("#hov").hover(function(){
		$("#hov1").text("Play the music for some wholesome experience and please support the game developer!")
	},
	function(){
		$("#hov1").text("")
	});
});

var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

new Vue({
  	// root node
  	el: "#form",
  	// the instance state
  	data: function() {
    	return {
      		name: "Jane Doe",
      		email: {
        		value: "jd@hnd.oe",
        		valid: true
	      	},
	      	message: {
	        	text: "Hello, ...",
	        	maxlength: 255
	      	},
	      	submitted: false
	    };
  	},
  	methods: {
    	// submit form handler
    	submit: function() {
      		this.submitted = true;
    	},
    	// validate by type and value
    	validate: function(type, value) {
      		if (type === "email") {
        		this.email.valid = this.isEmail(value) ? true : false;
      		}
    	},
    	// check for valid email adress
    	isEmail: function(value) {
      		return emailRegExp.test(value);
    	},
  	},
  	watch: {
    	// watching nested property
    	"email.value": function(value) {
      	this.validate("email", value);
  		}
  	}
});

