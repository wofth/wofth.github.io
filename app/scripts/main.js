'use strict';
var __konami__;

$(window).on('load', function () {
	$('.jumbotron.masthead').css('height', $(this).innerHeight());
	$('.full-height').css('height', $(this).innerHeight() + 200);
});

$(document).ready(function () {
	__konami__.enable(function(){
        $('#home,#release,#social').addClass('rainbow');
    }, { replay: false });

    $('.carousel').carousel();
});