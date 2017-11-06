(function ($) {
"use strict";


/* meanmenu */
$('#mobile-menu').meanmenu({
	 meanMenuContainer: '.mobile-menu',
	 meanScreenWidth: "767"
 });
 
 /* TOP Menu Stick  */
$(window).on('scroll',function() {
if ($(this).scrollTop() > 1){  
    $('#sticky-header').addClass("sticky");
  }
  else{
    $('#sticky-header').removeClass("sticky");
  }
}); 

/* slider-active */
$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
	navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


/* mixItUp */
$('#Container').mixItUp();
$('.image-link').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

/* testimonial-active */
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:false,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/* blog-active */
$('.blog-active').owlCarousel({
    loop:true,
    nav:false,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

/* brand-active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
	dots:false,
	navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



/* Scroll Up */
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="fa fa-angle-up"></i>',
});	


/*---------------------
       Circular Bars - Knob
    --------------------- */	
	  if(typeof($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		  var $this = $(this),
			  knobVal = $this.attr('data-rel');
	
		  $this.knob({
			'draw' : function () { 
			  $(this.i).val(this.cv + '%')
			}
		  });
		  
		  $this.appear(function() {
			$({
			  value: 0
			}).animate({
			  value: knobVal
			}, {
			  duration : 2000,
			  easing   : 'swing',
			  step     : function () {
				$this.val(Math.ceil(this.value)).trigger('change');
			  }
			});
		  }, {accX: 0, accY: -150});
		});
    }	

/* youtube video */
$('.youtube-bg').YTPlayer({
	videoURL: "r4dD-WYzrMs",
	containment: '.youtube-bg',
	autoPlay: true,
	loop: true,
});
})(jQuery);