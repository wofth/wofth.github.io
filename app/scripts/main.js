console.log('\'Allo \'Allo!');

$(window).on('load', function () {
	$('.jumbotron.masthead').css('height', $(this).innerHeight());
});