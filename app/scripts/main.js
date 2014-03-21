'use strict';
var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);

// Fixing height
$(window).on('load', function () {
	$('.jumbotron.masthead').css('height', $(this).innerHeight());
	$('.full-height').css('height', $(this).innerHeight());
});

$(document).ready(function () {
	// Gallery
    $('.carousel').carousel();

    // One page Scroll
    if(!isMobile) {
	    $('.holder').onepage_scroll({
			sectionContainer: '.section',
			easing: 'ease',
			animationTime: 1000,
			pagination: true,
			updateURL: true,
			keyboard: true,
			responsiveFallback: true
		});
	}

	// Youtube videos gallery
	var youtubeHolder = $('#youtube_gallery');

	$.ajax({
		type: 'GET',
		url: 'http://gdata.youtube.com/feeds/users/wofthounds/uploads?alt=json-in-script&format=5',
		cache: false,
		dataType: 'jsonp',
		success: function (data) {
			var videosLimit = 8, i = 0;
			$(data.feed.entry).each(function eachVideo (entry) {
				if(videosLimit == i) return;
				var url = this.link[0].href,
					url_thumbnail = this.media$group.media$thumbnail[2].url,
					description = this.media$group.media$description.$t,
					title = this.media$group.media$title.$t;

				var html = '<div class="col-xs-3 text-center video">';
					html += '<a href="'+url.replace('&feature=youtube_gdata', '')+'" class="fancybox-media" target="_blank">';
					html += '<div align="center"><img src="'+url_thumbnail+'" alt="'+description+'" class="img-responsive" /></div>';
					html += '<span class="hidden-xs">'+title+'</span>';
					html += '</a>';
					html += '</div>';

				youtubeHolder.append(html);
				i++;
			});

			$('.fancybox-media').magnificPopup({type:'iframe'});
	  	}
	});

	$('.fancybox-media').magnificPopup({type:'iframe'});
});