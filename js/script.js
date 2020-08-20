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
		$("#hov1").text("Play the music for some wholesome experience :) (Chrome doesnt let me autoplay. Bummer)")
	},
	function(){
		$("#hov1").text("")
	});
});
