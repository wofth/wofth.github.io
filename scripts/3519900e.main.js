"use strict";$(window).on("load",function(){$(window).innerWidth()>=768&&$(".jumbotron.masthead").css("height",$(this).innerHeight()),$(".full-height").css("height",$(this).innerHeight())}),$(document).ready(function(){$(".carousel").carousel(),$(window).innerWidth()>=768&&$(".holder").onepage_scroll({sectionContainer:".section",easing:"ease",animationTime:1e3,pagination:!0,updateURL:!0,keyboard:!0,responsiveFallback:!0});var a=$("#youtube_gallery");$.ajax({type:"GET",url:"http://gdata.youtube.com/feeds/users/wofthounds/uploads?alt=json-in-script&format=5",cache:!1,dataType:"jsonp",success:function(b){var c=8,d=0,e="";$(b.feed.entry).each(function(){if(c!=d){var a=this.link[0].href,b=this.media$group.media$thumbnail[0].url,f=this.media$group.media$description.$t,g=this.media$group.media$title.$t,h=0==d||4==d?'<div class="item">':"";h+='<div class="col-xs-3 text-center video">',h+='<a href="'+a.replace("&feature=youtube_gdata","")+'" class="fancybox-media" target="_blank">',h+='<div align="center"><img src="'+b+'" alt="'+f+'" class="img-responsive" /></div>',h+='<span class="hidden-xs">'+g+"</span>",h+="</a>",h+="</div>",h+=3==d||7==d?"</div>":"",e+=h,d++}}),a.append(e),a.find(".item:eq(0)").addClass("active"),$(".fancybox-media").magnificPopup({type:"iframe"}),$(".ytcarousel").carousel()}}),$(".fancybox-media").magnificPopup({type:"iframe"})});