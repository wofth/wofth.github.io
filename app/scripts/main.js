'use strict';
var __konami__;

$(window).on('load', function () {
	$('.jumbotron.masthead').css('height', $(this).innerHeight());
});

$(document).ready(function () {
	__konami__.enable(function(){
        $('#home,#release,#social').addClass('rainbow');
    }, { replay: false });
});