'use strict';

// Fixing height
$(window).on('load', function () {
	$('.jumbotron.masthead').css('height', $(this).innerHeight());
	$('.full-height').css('height', $(this).innerHeight());
});

$(document).ready(function () {
	// Gallery
    $('.carousel').carousel();

    // One page Scroll
    $('.holder').onepage_scroll({
		sectionContainer: '.section',
		easing: 'ease',
		animationTime: 1000,
		pagination: true,
		updateURL: true,
		keyboard: true,
		responsiveFallback: true
	});

	// Youtube videos gallery
	var youtubeHolder = $('#youtube_gallery');

	$.ajax({
		type: 'GET',
		url: 'http://gdata.youtube.com/feeds/users/wofthounds/uploads?alt=json-in-script&format=5',
		cache: false,
		dataType: 'jsonp',
		success: function (data) {
			var videosLimit = 8, i = 0;
			var fullhtml = "";
			$(data.feed.entry).each(function eachVideo (entry) {
				if(videosLimit == i) return;

				var url = this.link[0].href,
					url_thumbnail = this.media$group.media$thumbnail[0].url,
					description = this.media$group.media$description.$t,
					title = this.media$group.media$title.$t;

				var html = (i == 0 || i == 4) ? '<div class="item">' : '';

					html += '<div class="col-xs-3 text-center video">';
					html += '<a href="'+url.replace('&feature=youtube_gdata', '')+'" class="fancybox-media" target="_blank">';
					html += '<div align="center"><img src="'+url_thumbnail+'" alt="'+description+'" class="img-responsive" /></div>';
					html += '<span class="hidden-xs">'+title+'</span>';
					html += '</a>';
					html += '</div>';

				html += (i == 3 || i == 7) ? '</div>' : '';

				fullhtml += html;
				i++;
			});

			youtubeHolder.append(fullhtml);
			youtubeHolder.find('.item:eq(0)').addClass('active');

			$('.fancybox-media').magnificPopup({type:'iframe'});
			$('.ytcarousel').carousel();
	  	}
	});

	$('.fancybox-media').magnificPopup({type:'iframe'});
});