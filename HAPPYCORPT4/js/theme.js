

(function() {

	"use strict";

	var Theme = {

		initialized: false,

		initialize: function() {

			if (this.initialized) return;
			this.initialized = true;

			this.build();
			this.events();

		},

		build: function() {

			
			this.onReady();
			
			
			this.onLoad();
			
			
			this.searchNav();
			
			
			this.stickyMenu();
			
			
			jQuery('#jx-main-menu,#jx-main-menu-2').slicknav();

			
			this.scrollTop();

			
			this.wordAnimate();
			
			
			this.animation();

			
			this.getTweets();
			
			
			this.toggle();
			
			
			this.tabs();	
		
			
			this.prettyPhoto();
			
			
			this.parallax();
			
			
			this.isotope();
			
			
			this.counter();
			
			
			this.serviceNetwork();
			
			
			this.skillsBar();
			
			
			this.product_slider();
			
			
			this.alertBox();
			
		
			
			this.themestyler();

		},

		events: function() {
			
			
			jQuery(window).afterResize(function() {

				
				Theme.fixRevolutionSlider();

				
				if($(".isotope").get(0)) {
					$(".isotope").isotope('reLayout');
				}

			});


		},
		
		
	
		onReady: function(){				
			
			
			jQuery(document).ready(function(){
											
									
				jQuery('#jx-main-menu').jxmenu();				
											
			
				jQuery('#jx-counter-1').circliful();
				jQuery('#jx-counter-2').circliful();
				jQuery('#jx-counter-3').circliful();
				jQuery('#jx-counter-4').circliful();
				jQuery('.jx-circle-progress-2 #jx-counter-1').circliful();
				jQuery('.jx-circle-progress-2 #jx-counter-2').circliful();
				jQuery('.jx-circle-progress-2 #jx-counter-3').circliful();
				jQuery('.jx-circle-progress-2 #jx-counter-4').circliful();
				
				jQuery('.jx-circle-progress-3 #jx-counter-1').circliful();
				jQuery('.jx-circle-progress-3 #jx-counter-2').circliful();
				jQuery('.jx-circle-progress-3 #jx-counter-3').circliful();
				jQuery('.jx-circle-progress-3 #jx-counter-4').circliful();
				
				
				
				jQuery('.jx-counter-number').animate({marginTop:0},1000,'swing');
				jQuery('#count-go-up-1 span').counterUp({ 
					delay: 10, 
					time: 1000 
				});
				
				jQuery('#count-go-up-2 span').counterUp({ 
					delay: 20, 
					time: 1000 
				});
				
				jQuery('#count-go-up-3 span').counterUp({ 
					delay: 30, 
					time: 1000 
				});
				
				
				var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
					 $(".menu > li").each(function(){
						  if($(this).find("a").attr("href") == pgurl || $(this).find("a").attr("href") == '' )
						  $(this).addClass("active");
					 })
				
				
				jQuery('.slicknav_nav li.col > ul').children().unwrap();
				jQuery('.slicknav_nav li.col').children().unwrap();
				jQuery('.slicknav_nav li.clear').remove();
				jQuery('.slicknav_nav ul.submenu a.slicknav_item').remove();
				
				
				
				var isMobile = {
					Android: function() {
						return navigator.userAgent.match(/Android/i);
					},
					BlackBerry: function() {
						return navigator.userAgent.match(/BlackBerry/i);
					},
					iOS: function() {
						return navigator.userAgent.match(/iPhone|iPad|iPod/i);
					},
					Opera: function() {
						return navigator.userAgent.match(/Opera Mini/i);
					},
					Windows: function() {
						return navigator.userAgent.match(/IEMobile/i);
					},
					any: function() {
						return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
					}
				};
				
				if( isMobile.any() ) {
				   jQuery('.jx-rev-slider-holder').removeClass('jx-animate-header');
				}
								
			
			});
			
			
			
			
			(function($){
				$.fn.jxmenu = function(){					
							
					var jxmenuObj = this;
			
					
					return jxmenuObj.each(function(){
						jxSetup();			
									
						function jxSetup(){
						$('#jx-main-menu > li > .submenu').each(function() {
							var sub_menu_width= 235;
							var sub_menu=$('submenu',this);
							var numItems = $('li.col',this).length;			
							
							
							var new_sub_menu_width=sub_menu_width * numItems;			
							$(this).css('width',new_sub_menu_width+'px');	
							
							
							
							var pos = $(this).parent().position().left;
							var menu_pos = $('#jx-main-menu').offset().left;		
					
							
							
							
							
							var $whatever = $(this);
							var right_pos = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
							var width_pos = new_sub_menu_width;
							var docW = $(".container").width();
							var menu_width_pos=pos + new_sub_menu_width + menu_pos;
							var screen_size=$(window).width();
							console.log(menu_width_pos);
							console.log(screen_size);
							
							if (menu_width_pos > screen_size){	
							
							var left_pos = menu_width_pos - screen_size;				
							$(this).css({'left':-left_pos-50});
							}
							
							});
						
						}
					});
							
					};
					
					})(jQuery);		
			
		},	
		
		onLoad: function(){
			
			jQuery(window).on("load",function(){

				"use strict";
				jQuery('.spinner').fadeOut();
				jQuery('.loader').delay(350).fadeOut('slow'); 
				jQuery('body').delay(350).css({'overflow':'visible'});
		
				
				[].slice.call(document.querySelectorAll('img.tilt-effect')).forEach(function(img) {
					new TiltFx(img, JSON.parse(img.getAttribute('data-tilt-options')));
				});
				
				getWidthAndHeight();
				
			
				jQuery("a[href='#top'],.menu li a").mPageScroll2id({
					highlightSelector:".menu li a"
				});
	
				
				
				
				jQuery('.jx-blog-1 .flexslider,.jx-portfolio-image .flexslider').flexslider({
					animation: "slide",
					directionNav:false,
					slideshowSpeed:"8000"
				});
				
				
				jQuery('.jx-flexslider .flexslider').flexslider({
					animation: "slide",
					directionNav:false,
					slideshowSpeed:"8000"
				});
				
				
				jQuery('.jx-tilt-main .flexslider').flexslider({
					animation: "slide",
					controlNav: true,
					directionNav:true,
					slideshowSpeed:"8000"
				});
			
					
				jQuery('.jx-logo-partner-1 .flexslider').flexslider({
					animation: "slide",
					controlNav: false,
					directionNav:true,
					slideshowSpeed:"8000",
					itemWidth: 240,
					minItems: 2,
					maxItems: 5,
					prevText:'',
					nextText:''
				});
				
				
				jQuery('.jx-logo-partner-3 .flexslider').flexslider({
					animation: "slide",
					controlNav: true,
					directionNav:false,
					slideshowSpeed:"8000",
					itemWidth: 150,
					minItems: 2,
					maxItems: 4,
					prevText:'',
					nextText:''
				});
			
				
				jQuery('.jx-testimonials-1 .flexslider').flexslider({
					animation: "fade",
					directionNav:false,
					prevText:'',
					nextText:''
				});			
				
				
				jQuery('.jx-testimonials-2 .flexslider').flexslider({
					animation: "slide",
					direction:"horizontal",
					directionNav:true,
					prevText:'',
					nextText:''
				});	
				
				
				jQuery('.jx-testimonials-2.jx-side-nav-slide .flexslider').flexslider({
					animation: "slide",
					direction:"horizontal",
					directionNav:true,
					controlNav: false,
					prevText:'',
					nextText:''
				});	
				
				
				jQuery('.jx-testimonials-4 .flexslider').flexslider({
					animation: "slide",
					direction:"horizontal",
					directionNav:false,
					prevText:'',
					nextText:''
				});
				
				
				
				var owl = jQuery(".jx-testimonial-side-slide.owl-carousel"); 
		  		owl.owlCarousel({
					slideSpeed : 900,
					autoPlay : 3500,
					itemsDesktop: false,
					itemsDesktopSmall: false,
					itemsTablet: false,
					itemsTabletSmall: false,
					itemsMobile: false,
					autoHeight : true,
					items:1,
					stopOnHover : true,
					nav : true,
					navText: [
									  "<i class='icon-chevron-left icon-white'><</i>",
									  "<i class='icon-chevron-right icon-white'>></i>"
									  ],
					pagination : true
					
				});
				
				
				
				var owl_1 = jQuery(".jx-single-carousel.owl-carousel"); 
		  		owl_1.owlCarousel({
					slideSpeed : 900,
					autoPlay : 3500,
					itemsDesktop: false,
					itemsDesktopSmall: false,
					itemsTablet: false,
					itemsTabletSmall: false,
					itemsMobile: false,
					autoHeight : true,
					items:1,
					stopOnHover : true,
					nav : true,
					navText : [
						"<span class='jx-owl-next'><i class='fa fa-chevron-left'></i></span>",
						"<span class='jx-owl-previous'><i class='fa fa-chevron-right'></i></span>"],
					dots : true,
					transitionStyle : "backSlide"
					
				});
				
				
				
				var owl_2 = jQuery(".jx-three-carousel.owl-carousel"); 
		  		owl_2.owlCarousel({
					slideSpeed : 900,
					autoPlay : 3500,
					itemsDesktop: false,
					itemsDesktopSmall: false,
					itemsTablet: false,
					itemsTabletSmall: false,
					itemsMobile: false,
					autoHeight : true,
					items:3,
					stopOnHover : true,
					nav : true,
					navText : [
						"<span class='jx-owl-next'><i class='fa fa-chevron-left'></i></span>",
						"<span class='jx-owl-previous'><i class='fa fa-chevron-right'></i></span>"],
					dots : true,
					loop:true,
					margin:10,
					responsiveClass:true,
					responsive:{
						0:{
							items:1,
							nav:false
						},
						600:{
							items:3,
							nav:false
						},
						1000:{
							items:3,
							loop:false
						}
					}
					
					
				});
				
				
				var owl_3 = jQuery(".jx-four-carousel.owl-carousel"); 
		  		owl_3.owlCarousel({
					slideSpeed : 900,
					autoPlay : 3500,
					itemsDesktop: false,
					itemsDesktopSmall: false,
					itemsTablet: false,
					itemsTabletSmall: false,
					itemsMobile: false,
					autoHeight : true,
					items:4,
					stopOnHover : true,
					nav : true,
					navText : [
						"<span class='jx-owl-next'><i class='fa fa-chevron-left'></i></span>",
						"<span class='jx-owl-previous'><i class='fa fa-chevron-right'></i></span>"],
					dots : true,
					
					responsiveClass:true,
					responsive:{
						0:{
							items:1,
							nav:false
						},
						600:{
							items:3,
							nav:false
						},
						1000:{
							items:4,
							loop:false
						}
					}
					
					
					
				});
				
				
								
				jQuery('.jx-parallax-fullwidth').css({'height':((jQuery(window).height()))+'px'});
				
				
				getWidthAndHeight();
				
				function getWidthAndHeight (){
					var winWidth = jQuery(window).width();
					var winHeight = jQuery(window).height();
					jQuery('.jx-middle').css({'width': winWidth,'height': winHeight,});
					
					jQuery('.jx-middle').each(function(){	
						  var $pa = jQuery(this);
						  var $ch = $pa.find('.jx-parallax-content');
						  var paH = $pa.innerHeight();
						  var chH = $ch.innerHeight();
						
						  $ch.css({marginTop: (paH-chH)/2});
						
						});
				}
							
				});
				
				jQuery(window).resize(function(){ 
					jQuery('.jx-parallax-fullwidth').css({'height':((jQuery(window).height()))+'px'});	
					
					getWidthAndHeight();
					
					function getWidthAndHeight (){
					var winWidth = jQuery(window).width();
					var winHeight = jQuery(window).height();
					jQuery('.jx-middle').css({'width': winWidth,'height': winHeight,});
					
					jQuery('.jx-middle').each(function(){	
						  var $pa = jQuery(this);
						  var $ch = $pa.find('.jx-parallax-content');
						  var paH = $pa.innerHeight();
						  var chH = $ch.innerHeight();
						
						  $ch.css({marginTop: (paH-chH)/2});
						
						});
					}
					
					
					
								
				});					
			
		},
		searchNav: function() {
			
		  jQuery(".jx-search-icon").on("click",function(event){
				event.stopPropagation();
				
				jQuery(".search-box", this).slideToggle('fast', function(){
				
					if (jQuery(this).is(":visible")) {  
						jQuery(this).parent().addClass('open');
					}
					else {
						jQuery(this).parent().removeClass('open');
					}
				 });
				
		  });
		  
		  jQuery(document).on("click",function(e){
				var targetbox = jQuery('.search-box');
				if(!targetbox.is(e.target) && targetbox.has(e.target).length === 0){
					targetbox.fadeOut('fast');
					jQuery(".search-box", this).removeClass('open');
				}
		   });
		   
		 
		  jQuery('.input-group-flyout input, .input-group-btn-flyout button').on("click",function(e) {
			e.stopPropagation();
		  });		
			
		},

		stickyMenu: function() {
			
			 var s = jQuery(".jx-sub-header");
    		 var pos = s.position();  
			 var top = s.css('top');
			 var subheader = jQuery('.jx-sub-header.sticky');
			 var mainbody = jQuery('.main');
			 var page_header = jQuery('.jx-page-header .box-content,.jx-page-subhead-2,.jx-page-subhead-4');
			 var page_head_main =jQuery('.jx-page-header,.jx-page-subhead-2,.jx-page-subhead-4');
			 var home_slider = jQuery('.jx-slider');
			 var home_slider_head = jQuery('.jx-slider header');
			 var menu_bottom_slider = jQuery('header.jx-bottom-slider');
			 var header_stick = jQuery('.jx-animate-header');
			 var small_logo = jQuery('.jx-header-small-logo');
			 var slider_height = jQuery('.tp-banner-container').height();
			 
			
			 var header_4_transparent = jQuery('.jx-header-4-transparent.sticky');
			 
			
			 home_slider.css({'height':slider_height});
			
		
			 if (header_stick.length >0){			 	
				var slider_top = header_stick.offset().top;	
					 
			 }
			 
			 if (menu_bottom_slider.length > 0){
			 
			 }else{
			   jQuery('.jx-header-logo').before(jQuery('.jx-header-logo').clone().addClass("jx-header-small-logo"));
			 }

			
			 var nav_height = s.height();
			 
			 
			 jQuery(window).on("scroll",function() {
				
				var percent_overlay = (jQuery(document).scrollTop() / jQuery(document).height())*6;
				var percent_slider = (jQuery(document).scrollTop() / jQuery(document).height());
				var scroll = getCurrentScroll();
					
				
				if ((subheader.length >0) && (jQuery('.jx-page-header.no-fixed').length <= 0)){	
				
					if ( scroll >= pos.top+1){
						subheader.addClass('fixed');
						
						if(page_head_main.length > 0){
							page_header.css({'margin-top':'118px'});
							page_head_main.css({'marginTop':nav_height});						
						}else{
							if (home_slider.length<=0){
							mainbody.css({'marginTop':nav_height});
							}
						}
						
						if (home_slider_head.length <0){
						home_slider.css({'marginTop':nav_height});
						}
						
						
					}else{
						subheader.removeClass('fixed');
						
						if(page_head_main.length > 0){
							page_header.css({'margin-top':'118px'});
							page_head_main.css({'marginTop':0});
						}else{
							if (home_slider.length<=0){
							mainbody.css({'marginTop':0});
							}
						}
						
						
						
						if (home_slider_head.length <0){
						home_slider.css({'marginTop':0});
						}
					}
				
					 if ( scroll > 150 ) {
						 jQuery('.jx-header-small-logo').addClass('show');
					  }else{
						 jQuery('.jx-header-small-logo').removeClass('show');
					  }
				  
				 }
				 
				 
				if (header_stick.length >0){
				jQuery('.jx-scroll-overlay').css('opacity', 0 + percent_overlay);				
				jQuery('.jx-animate-header.fixed').css('top', -percent_slider*700);				
				
					if (scroll > slider_top ){
						header_stick.addClass('fixed');
					}else{				
						header_stick.removeClass('fixed');					 
					}
				}
				
				
				
				if (header_4_transparent.length > 0){
					
					if ( scroll > 1 ) {
						 header_4_transparent.addClass('fixed');
					  }else{
						 header_4_transparent.removeClass('fixed');
					  }
				
				}
				
				
				 
				
			});
			
		
			function getCurrentScroll() {
				return window.pageYOffset || document.documentElement.scrollTop;
			}
			
		},
		
		animation:function(){

			
			$("[data-appear-animation]").each(function() {

				var $this = $(this);

				$this.addClass("appear-animation");

				if(!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {

					$this.appear(function() {

						var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);

						if(delay > 1) $this.css("animation-delay", delay + "ms");
						$this.addClass($this.attr("data-appear-animation"));

						setTimeout(function() {
							$this.addClass("appear-animation-visible");
						}, delay);

					}, {accX: 0, accY: -150});

				} else {

					$this.addClass("appear-animation-visible");

				}

			});
			
			
			
			
			$("[data-progress-animate]").each(function() {

				var $this = $(this);

				$this.appear(function() {

					var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);

					if(delay > 1) $this.css("animation-delay", delay + "ms");
					$this.addClass($this.attr("data-appear-animation"));

					setTimeout(function() {

						$this.animate(
						{
							width: $this.attr("data-progress-animate")
						}, 1500, "easeOutQuad", function() {
							$this.find(".percenttext").animate({opacity: 1,left:$this.attr("data-progress-animate")}, 500, "easeOutQuad");
						});

					}, delay);

				}, {accX: 0, accY: -50});

			});
			
			
				
			jQuery('.circliful').appear();
			
		},

		getTweets: function() {
			
			var get_twitter = jQuery("#tweet"),
				accountId = get_twitter.data("account-id");

			if(get_twitter.get(0) && accountId != "") {
				getTwitters("tweet", {
					id: accountId,
					count: 1
				});

				get_twitter.before(jQuery("<a />").addClass("twitter-account").html("@" + accountId).attr("href", "http://www.twitter.com/" + accountId).attr("target", "_blank"));

			} else {
				get_twitter.empty();
			}
			
		},

		fixRevolutionSlider: function() {

			$(".revslider-initialised").each(function() {
				try{
					$(this).revredraw();
				} catch(e) {}
			});

		},
		
		scrollTop: function(){
		
			jQuery.scrollUp({
						scrollName: 'scrollUp', 
						scrollDistance: 300, 
						scrollFrom: 'top',
						scrollSpeed: 300, 
						easingType: 'linear', 
						animation: 'fade', 
						animationInSpeed: 200, 
						animationOutSpeed: 200, 
						scrollTitle: false,
						scrollImg: false,
						activeOverlay: false, 
						zIndex: 2147483647 
					});
					
			jQuery(function($){
				jQuery('.destroy').on("click",function($){
					$.scrollUp.destroy();
				})
			});			
			
		},
		wordAnimate: function(){
		
			var animationDelay = 2500,
				
				barAnimationDelay = 3800,
				barWaiting = barAnimationDelay - 3000, 
				
				lettersDelay = 50,
				
				typeLettersDelay = 150,
				selectionDuration = 500,
				typeAnimationDelay = selectionDuration + 800,
				
				revealDuration = 600,
				revealAnimationDelay = 1500;
			
			initHeadline();
			
		
			function initHeadline() {
				
				singleLetters(jQuery('.jx-headline.letters').find('b'));
				
				animateHeadline(jQuery('.jx-headline'));
			}
		
			function singleLetters($words) {
				$words.each(function(){
					var word = $(this),
						letters = word.text().split(''),
						selected = word.hasClass('is-visible');
					for (i in letters) {
						if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
						letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
					}
					var newLetters = letters.join('');
					word.html(newLetters).css('opacity', 1);
				});
			}
		
			function animateHeadline($headlines) {
				var duration = animationDelay;
				$headlines.each(function(){
					var headline = jQuery(this);
					
					if(headline.hasClass('loading-bar')) {
						duration = barAnimationDelay;
						setTimeout(function(){ headline.find('.jx-words-wrapper').addClass('is-loading') }, barWaiting);
					} else if (headline.hasClass('clip')){
						var spanWrapper = headline.find('.jx-words-wrapper'),
							newWidth = spanWrapper.width() + 10
						spanWrapper.css('width', newWidth);
					} else if (!headline.hasClass('type') ) {
						
						var words = headline.find('.jx-words-wrapper b'),
							width = 0;
						words.each(function(){
							var wordWidth = jQuery(this).width();
							if (wordWidth > width) width = wordWidth;
						});
						headline.find('.jx-words-wrapper').css('width', width);
					};
		
					
					setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
				});
			}
		
			function hideWord($word) {
				var nextWord = takeNext($word);
				
				if($word.parents('.jx-headline').hasClass('type')) {
					var parentSpan = $word.parent('.jx-words-wrapper');
					parentSpan.addClass('selected').removeClass('waiting');	
					setTimeout(function(){ 
						parentSpan.removeClass('selected'); 
						$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
					}, selectionDuration);
					setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
				
				} else if($word.parents('.jx-headline').hasClass('letters')) {
					var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
					hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
					showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
		
				}  else if($word.parents('.jx-headline').hasClass('clip')) {
					$word.parents('.jx-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
						switchWord($word, nextWord);
						showWord(nextWord);
					});
		
				} else if ($word.parents('.jx-headline').hasClass('loading-bar')){
					$word.parents('.jx-words-wrapper').removeClass('is-loading');
					switchWord($word, nextWord);
					setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
					setTimeout(function(){ $word.parents('.jx-words-wrapper').addClass('is-loading') }, barWaiting);
		
				} else {
					switchWord($word, nextWord);
					setTimeout(function(){ hideWord(nextWord) }, animationDelay);
				}
			}
		
			function showWord($word, $duration) {
				if($word.parents('.jx-headline').hasClass('type')) {
					showLetter($word.find('i').eq(0), $word, false, $duration);
					$word.addClass('is-visible').removeClass('is-hidden');
		
				}  else if($word.parents('.jx-headline').hasClass('clip')) {
					$word.parents('.jx-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
						setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
					});
				}
			}
		
			function hideLetter($letter, $word, $bool, $duration) {
				$letter.removeClass('in').addClass('out');
				
				if(!$letter.is(':last-child')) {
					setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
				} else if($bool) { 
					setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
				}
		
				if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
					var nextWord = takeNext($word);
					switchWord($word, nextWord);
				} 
			}
		
			function showLetter($letter, $word, $bool, $duration) {
				$letter.addClass('in').removeClass('out');
				
				if(!$letter.is(':last-child')) { 
					setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
				} else { 
					if($word.parents('.jx-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.jx-words-wrapper').addClass('waiting'); }, 200);}
					if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
				}
			}
		
			function takeNext($word) {
				return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
			}
		
			function takePrev($word) {
				return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
			}
		
			function switchWord($oldWord, $newWord) {
				$oldWord.removeClass('is-visible').addClass('is-hidden');
				$newWord.removeClass('is-hidden').addClass('is-visible');
			}	
		},
		
		toggle: function(){
			
			jQuery('#accordion-1 [data-accordion]').accordion();
		
			jQuery('#accordion-2 [data-accordion],#accordion-3 [data-accordion]').accordion({
			  singleOpen: false
			});
			
			jQuery('.accordion [data-accordion]').accordion({
			  singleOpen: false
			});
		},
		tabs:function(){
			
		 jQuery('#verticalTab-1').easyResponsiveTabs({ 
			type: 'vertical', 
			width: 'auto', 
			fit: true, 
			closed: 'accordion', 
			 
		 }); 
		 

		 jQuery('#verticalTab-2').easyResponsiveTabs({ 
			type: 'vertical', 
			width: 'auto', 
			fit: true, 
			closed: 'accordion',
			 
		 }); 
		 
		 
		 jQuery('#verticalTab-3').easyResponsiveTabs({ 
			type: 'vertical', 
			width: 'auto', 
			fit: true, 
			closed: 'accordion', 
			 
		 }); 
		 
		 
		jQuery('#verticalTab-4').easyResponsiveTabs({ 
			type: 'vertical', 
			width: 'auto',
			fit: true,
			closed: 'accordion', 
			 
		 }); 
		 
		 jQuery('#verticalTab-5').easyResponsiveTabs({ 
			type: 'vertical', 
			width: 'auto', 
			fit: true, 
			closed: 'accordion', 
			 
		 }); 
		 
		 jQuery('#verticalTab-6').easyResponsiveTabs({ 
			type: 'vertical', 
			width: 'auto', 
			fit: true, 
			closed: 'accordion', 
			 
		 }); 
		 
		 jQuery('#horizontalTab-1').easyResponsiveTabs({ 
			type: 'default', 
			width: 'auto', 
			fit: true, 
			closed: 'accordion', 
			 
		 });
		 
		 jQuery('#horizontalTab-2').easyResponsiveTabs({ 
			type: 'default', 
			width: 'auto',
			fit: true, 
			closed: 'accordion', 
			 
		 }); 
		 
		  jQuery('#horizontalTab-3').easyResponsiveTabs({ 
			type: 'default', 
			width: 'auto',
			fit: true, 
			closed: 'accordion', 
			 
		 });
		 
		 jQuery('#horizontalTab-4').easyResponsiveTabs({ 
			type: 'default',
			width: 'auto', 
			fit: true, 
			closed: 'accordion', 
			 
		 }); 
		 
		 jQuery('#horizontalTab-5').easyResponsiveTabs({ 
			type: 'default', 
			width: 'auto', 
			fit: true, 
			closed: 'accordion', 
			 
		 }); 
		 
		
		},	
		prettyPhoto: function(){
			
		var prettyPhoto_parameters = {
					animation_speed: 'fast',
					slideshow: true,
					theme:'facebook',
					opacity: 1,
					show_title:true, 
					allow_resize: true, 
					default_width: 920,
					default_height: 540,
				   counter_separator_label: '/', 
					hideflash: false, 
					wmode: 'opaque', 
					autoplay: true, 
					modal: false,
					overlay_gallery: true
				};	
				
						
					jQuery('a[href$=jpg], a[href$=JPG], a[href$=jpeg], a[href$=JPEG], a[href$=png], a[href$=gif], a[href$=bmp]:has(img),a[class^="prettyPhoto"],a[data-rel^="prettyPhoto"]').prettyPhoto(prettyPhoto_parameters);
	
				
				jQuery('a[class^="prettyPhoto"],a[data-rel^="prettyPhoto"]').prettyPhoto(prettyPhoto_parameters); 	
			
		},
		
		parallax: function(){
		
		jQuery('.parallax,.jx-page-header-parallax').scrolly({bgParallax: true});
			
		},
		
		isotope: function(){
		
			jQuery(window).on("load",function(){
			
			
			var $container = jQuery('.jx-portfolio');		
			var $item = $container.find('.item').not('.item-w2').eq(0);
			
			$container.isotope({
				itemSelector: '.item',
				masonry: {
				  columnWidth: 300,
				  isFitWidth: true
				}
			  });
		 
			jQuery('.jx-portfolio-filter a').on("click",function(){
				jQuery('.jx-portfolio-filter .current').removeClass('current');
				jQuery(this).addClass('current');
		 
				var selector = jQuery(this).attr('data-filter');
				$container.isotope({
					layoutMod: 'fitRows',
					itemSelector: '.item',
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				 });
				 return false;
			});	
			
			
			
			var $container = jQuery('.jx-portfolio-columns');		
			
			$container.isotope({
				itemSelector: '.portfolio-item-container',
				layoutMode: 'fitRows'
			  });
		 
			jQuery('.jx-portfolio-filter-page a').on("click",function(){
				jQuery('.jx-portfolio-filter-page .current').removeClass('current');
				jQuery(this).addClass('current');
		 
				var selector = jQuery(this).attr('data-filter');
				$container.isotope({
					itemSelector: '.portfolio-item-container',
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				 });
				 return false;
			});		
			
			
			});	
			
			
		
		},
		
		counter: function(){
		
		jQuery(".jx-count-up").counterUp({ 
                delay: 10, 
                time: 1000 
            }); 	
		
		},
		
		serviceNetwork: function(){
			
		var items = document.querySelectorAll('.jx-circle-nav li');
		
		var items_text = document.querySelectorAll('.jx-srvc-container div');
		
		for(var i = 0, l = items.length; i < l; i++) {
		  items[i].style.left = (50 - 55*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";  
		  items[i].style.top = (50 + 55*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(6) + "%";  
		}
			
		},
		
		skillsBar:function() {
			
		
		
		},
		
		alertBox: function(){
						
		jQuery('.jx-close').on("click",function($) { 
			jQuery(this).parent().hide(); 
			}); 
		},
		
		product_slider: function(){
			//			
			 jQuery.isFunction(jQuery.fn.noUiSlider) && (jQuery('#shop_price_slider').noUiSlider({
				  start: [
					200,
					800
				  ],
				  step: 1,
				  snap: !1,
				  connect: !0,
				  range: {
					min: 0,
					max: 1000
				  },
				  format: {
						to: function (e) {
						  return e + ',-'
						},
						from: function (e) {
						  return e.replace(',-', '')
						}
				  }
				}),
				
				jQuery('#shop_price_slider').Link('lower').to(jQuery('#shop_price_slider_lower'), null, wNumb({prefix: '$'})), 				
				jQuery('#shop_price_slider').Link('lower').to(jQuery('#min_price'), null, wNumb({})),				
				jQuery('#shop_price_slider').Link('upper').to(jQuery('#shop_price_slider_upper'), null, wNumb({prefix: '$'})), 				
				jQuery('#shop_price_slider').Link('upper').to(jQuery('#max_price'), null, wNumb({}))
				
				)
				
				
				
		},
		
		themestyler: function(){
			
		var $b = jQuery('body'),
			$h = jQuery('head'),
			$w = jQuery(window);
		
		
		
	if(jQuery.cookie("css")) {
		jQuery("#skin").attr("href",jQuery.cookie("css"));
	}
	
	if(jQuery.cookie("body-layout")) {
		if(jQuery.cookie("body-layout") == 'boxed') {
			$b.addClass('boxed');			
			$b.css('background', 'url(http://janxcode.com/olen/dark-theme/images/bg/bg12.png) repeat fixed center center transparent');
			$b.css('background-size', 'auto');
			$w.resize();
			
		}else if(jQuery.cookie("body-layout") == 'Wide') {
			$b.removeClass('boxed');
			$w.resize();			
		}
		
	}
			
	
	
	jQuery('.patterns a').click(function() {
		var current = jQuery('#olen-styleswitcher select[name=layout]').find('option:selected').val();

		if(current == 'Boxed') {
			
			var pattern = jQuery(this).attr('title');
			
			if(jQuery(this).hasClass('fullimage')) {
				$b.css('background', 'url(http://janxcode.com/olen/dark-theme/images/bg-image/'+pattern+'.jpg) no-repeat center center fixed');
				$b.css('background-size', 'cover');
			} else {
				$b.css('background', 'url(http://janxcode.com/olen/dark-theme/images/bg/'+pattern+'.png) repeat center center fixed');
				$b.css('background-size', 'auto');
			}
		}else {
		alert('Please select Boxed Layout');
		}
	});

	
	
	jQuery('.color_css').click(function(e) {
	
	var color = jQuery(this).attr('id');
      
	  if (color == "3ea7d7") {
      var skin_link="http://janxcode.com/olen/dark-theme/css/skins/blue.css";
	  jQuery('#skin').attr('href', skin_link);
      $b.css('background-color',color);
	  jQuery.cookie("css",skin_link, {expires: 365, path: '/'});
	  return false;   
	  }
	  
	  if (color == "1DA879") {
      var skin_link="http://janxcode.com/olen/dark-theme/css/skins/green.css";
	  jQuery('#skin').attr('href', skin_link);
      $b.css('background-color',color);
	  jQuery.cookie("css",skin_link, {expires: 365, path: '/'});
	  return false;      
	  }
	  
	  if (color == "d80000") {
      var skin_link="http://janxcode.com/olen/dark-theme/css/skins/red.css";
	  jQuery('#skin').attr('href', skin_link);
      $b.css('background-color',color);
	  jQuery.cookie("css",skin_link, {expires: 365, path: '/'});
	  return false;      
	  }
	  
	  if (color == "E5493A") {
      var skin_link="http://janxcode.com/olen/dark-theme/css/skins/orange.css";
	  jQuery('#skin').attr('href', skin_link);
      $b.css('background-color',color);
	  jQuery.cookie("css",skin_link, {expires: 365, path: '/'});
	  return false;      
	  }
	  
	  if (color == "E22467") {
      var skin_link="http://janxcode.com/olen/dark-theme/css/skins/pink.css";
	  jQuery('#skin').attr('href', skin_link);
      $b.css('background-color',color);
	  jQuery.cookie("css",skin_link, {expires: 365, path: '/'});
	  return false;    
	  }
	  
	  if (color == "f5a823") {
      var skin_link="http://janxcode.com/olen/dark-theme/css/skins/sun.css";
	  jQuery('#skin').attr('href', skin_link);
      $b.css('background-color',color);
	  jQuery.cookie("css",skin_link, {expires: 365, path: '/'});
	  return false;     
	  }
	  
	  if (color == "9dc032") {
      var skin_link="http://janxcode.com/olen/dark-theme/css/skins/greentea.css";
	  jQuery('#skin').attr('href', skin_link);
      $b.css('background-color',color);
	  jQuery.cookie("css",skin_link, {expires: 365, path: '/'});
	  return false;   
	  }
	  
	  if (color == "32b4c0") {
      var skin_link="http://janxcode.com/olen/dark-theme/css/skins/torquze.css";
	  jQuery('#skin').attr('href', skin_link);
      $b.css('background-color',color);
	  jQuery.cookie("css",skin_link, {expires: 365, path: '/'});
	  return false;    
	  }
	
	 });  
		
		}		

	};

	Theme.initialize();

})();