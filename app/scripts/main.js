'use strict';
var __konami__;

// Fixing height
$(window).on('load', function () {
	$('.jumbotron.masthead').css('height', $(this).innerHeight());
	$('.full-height').css('height', $(this).innerHeight());
});

$(document).ready(function () {
	// Vini Konami
	__konami__.enable(function(){
        $('#home,#release,#ep,#gallery,#contact').addClass('rainbow');
    }, { replay: false });

	// Gallery
    $('.carousel').carousel();

    // One page Scroll
    $('.holder').onepage_scroll({
		sectionContainer: '.section',
		easing: 'ease',
		animationTime: 1000,
		pagination: true,
		keyboard: true,
		responsiveFallback: false
	});
});