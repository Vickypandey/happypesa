
jQuery(function($) {'use strict',


		  
	 

  $(window).load(function(){'use strict';
		 $(".loader").fadeOut("slow");
  });
	 
	 
 
  $('.go-top').on('click', function(){
	 $('html, body').animate({scrollTop: 0}, 800);
  });
  
  

  $("#submit_btn").click(function() { 
       
        var user_name       = $('input[name=name]').val(); 
        var user_email      = $('input[name=email]').val();
		var user_telephone      = $('input[name=phone]').val();
		var user_subject      = $('input[name=subject]').val();
        var user_message    = $('textarea[name=message]').val();
        
       
        var proceed = true;
        if(user_name==""){ 
            proceed = false;
        }
        if(user_email==""){ 
            proceed = false;
        }
		if(user_message=="") {  
            proceed = false;
        }

       
        if(proceed) 
        {
            
            post_data = {'userName':user_name, 'userEmail':user_email, 'userTelephone':user_telephone, 'userSubject':user_subject, 'userMessage':user_message};
            
            
            $.post('contact_me.php', post_data, function(response){  

                
				if(response.type == 'error')
				{
					output = '<div class="error">'+response.text+'</div>';
				}else{
				    output = '<div class="success">'+response.text+'</div>';
					
					
					$('.form-inline input').val(''); 
					$('.form-inline textarea').val(''); 
				}
				
				$("#result").hide().html(output).slideDown();
            }, 'json');
			
        }
    });
    
    
    $(".form-inline input, .form-inline textarea").keyup(function() { 
        $("#result").slideUp();
    });
    

	
	
	$("#submit_btn_short").click(function() { 
        
        var user_name       = $('input[name=name]').val(); 
        var user_email      = $('input[name=email]').val();
		var user_message    = $('textarea[name=message]').val();
        
        
        var proceed = true;
        if(user_name==""){ 
            proceed = false;
        }
        if(user_email==""){ 
            proceed = false;
        }
		if(user_message=="") {  
            proceed = false;
        }

        
        if(proceed) 
        {
            
            post_data = {'userName':user_name, 'userEmail':user_email, 'userMessage':user_message};
			            
            
            $.post('contact_me.php', post_data, function(response){  

                
				if(response.type == 'error')
				{
					output = '<div class="error">'+response.text+'</div>';
				}else{
				    output = '<div class="success">'+response.text+'</div>';
					
					
					$('.form-inline input').val(''); 
					$('.form-inline textarea').val(''); 
				}
				
				$("#result").hide().html(output).slideDown();
            }, 'json');
			
        }
    });
    
    
    $(".form-inline input, .form-inline textarea").keyup(function() { 
        $("#result").slideUp();
    });
    

  
  


  jQuery(window).scroll(function() {
  
	 if (jQuery(window).scrollTop() >= 25) {
		jQuery(".logo > img").attr("src", "images/logo-black.png");
	 }
	  else {
		jQuery(".logo > img").attr("src", "images/logo-white.png");
	 }
  
  });
		  
	 
	
	 $('.nav-icon').on('click', function () {
		  return $(this).toggleClass('open');
	 }.call(this));
			 


  
	$(".navbar-default .navbar-nav li.dropdown").on('click', function() {
		 if ($(window).width() < 979) {
			 $(this).next('.dropdown-menu').show();
			 $(this).next.toggleClass('open'); 
		 }
	});
			
	$(".navbar-default .navbar-nav li.dropdown").hover(function () {
		 if ($(window).width() >= 979) {
			 $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
				$(this).toggleClass('open');
		 }
	}, function () {
		 if ($(window).width() >= 979) {
			  $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
				$(this).removeClass('open');
		 }
	});
	
	
	
	
	$(".menu-opener").on('click', function(){
	  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
	});
	
	
	
	
	
	
	
	
  $(document).on('click', function () {
        $('#sidebar-wrapper').removeClass('active');
    });
    $('#menu-toggle , #menu-close').on('click', function (e) {
        e.stopPropagation();
        $('#sidebar-wrapper').toggleClass('active');
    });
    $('#sidebar-wrapper').on('click', function (e) {
        e.stopPropagation();
    });
	 
	 $(".sidebar-nav li.dropdown , .cbp-spmenu-right .dropdown ,  .cbp-spmenu-left li.dropdown > a").on('click', function(e) {
         e.preventDefault();
         $(this).next('.dropdown-menu').slideDown();
			$(this).find(".dropdown-menu").slideToggle('open');
    
   });
	
	

	 
	 
	 
	 $('a[href="#search"]').on('click', function(event) {
		 event.preventDefault();
		 $('#search').addClass('open');
		 $('#search > form > input[type="search"]').focus();
	 });
	 $('#search, #search button.close').on('click keyup', function(event) {
	  if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
		  $(this).removeClass('open');
	  }
	 });
		  
		  
		  
		
	 $( ".cart-expender" ).on('click', function(e){
		e.preventDefault();
		$(".cart").fadeToggle("easeInElastic");
	 });
		  
		  
		 
		 
	$('.calculate').on('click', function(e){
		 e.preventDefault();
		 $('.form-toggle').slideToggle('slow');
  });
		
		
		  
	$('.item > img').bind('mouseenter mouseleave', function() {
		  $(this).attr({
				src: $(this).attr('data-other-src') , 'data-other-src': $(this).attr('src') 
		  })
	 });


		 
	 $(".slide-toggle").on('click', function() { 
		 $(this).next('.box').fadeToggle();
		 return false;
	 });
    
	


		  
	 $(".number-counters").appear(function () {
		$(".number-counters [data-to]").each(function () {
		  var e = $(this).attr("data-to");
		  $(this).delay(6e3).countTo({
			 from: 50,
			 to: e,
			 speed: 3e3,
			 refreshInterval: 50
		  })
		})
	 });
		  
	 
	
	 
	 $('.skills li').each(function () {
		$(this).appear(function() {
		  $(this).animate({opacity:1,left:"0px"},800);
		  var b = jQuery(this).find(".progress-bar").attr("data-width");
		  $(this).find(".progress-bar").animate({
			 width: b + "%"
		  }, 1300, "linear");
		}); 
	 });
		  
	 
	 
	  
	 $('.some').appear(function () {
		 $('.myStat2').circliful() 
	 });   
	 

  
  
	$("#testinomial-slider").owlCarousel({
		  autoPlay : true,
		  navigation : true,
		  slideSpeed : 250,
		  pagination : false,
		  navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		  singleItem:true
	
	 });

  
   
    $("#publication-slider").owlCarousel({
		  autoPlay: true, 
		  pagination : false,
		  navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		  navigation : true,
		  items : 3,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
 
  });
    
  
  
	 $("#testinomial-indexTwo").owlCarousel({
		  autoPlay: true, 
		  pagination : true,
		  navigation : false,
		  items : 2,
		  itemsDesktop : [1199,2],
		  itemsDesktopSmall : [979,2]
 
  });

	
	$("#testinomial-indexFour").owlCarousel({
		  navigation : false,
		  autoPlay: true,
		  slideSpeed : 300,
		  pagination : true,
		  singleItem:true,
	 });
		
	 
	
	 $("#about-slider,.cart-slider").owlCarousel({
		  autoPlay :2500,
		  pagination : false,
		  navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		  navigation : true,
		  singleItem:true
	 
	 });
	
	
	 $("#client-slider").owlCarousel({
		  pagination : false,
		  autoPlay: 2000, 
		  items : 4,
		  navigation : true,
		  navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
	
	 });
	 
	  
	 $(".service-slider").owlCarousel({
		  autoPlay: 3000,
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,2]
     
	  });
	  

	  $("#team-slider").owlCarousel({
			navigation : false, 
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,

	 });
	 
	
  $(".product-slider").owlCarousel({
      autoPlay: true, 
      items : 4,
		pagination : false,
		navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigation : true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
  
 

	$("#studio-slider.carousel").carousel({
	  interval:3000
	});
	
	

	var owl = $("#paralax-slider");
  owl.owlCarousel({
    autoPlay: 3000,
	 navigation : false,
    singleItem : true,
    transitionStyle : "fade"
  });

  
  

  var $allVideos = jQuery("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
			jQueryfluidEl = jQuery("figure");
					
			$allVideos.each(function() {
			
			  jQuery(this)
				
				.attr('data-aspectRatio', this.height / this.width)
				.removeAttr('height')
				.removeAttr('width');
			
			});
			
			jQuery(window).resize(function() {
			
			  var newWidth = jQueryfluidEl.width();
			  $allVideos.each(function() {
			  
				var jQueryel = jQuery(this);
				jQueryel
					.width(newWidth)
					.height(newWidth * jQueryel.attr('data-aspectRatio'));
			  
			  });
			
			}).resize();
  
  
 


$('.btn-number').on('click', function(e){
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
});

$(".input-number").keydown(function (e) {
        
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             
            (e.keyCode == 65 && e.ctrlKey === true) || 
             
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 
                 return;
        }
        
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
	 
	 
	 

    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").on('click', function() {
		  $(".tab_content").hide();
		  var activeTab = $(this).attr("rel"); 
		  $("#"+activeTab).fadeIn();		
		  
		  $("ul.tabs li").removeClass("active");
		  $(this).addClass("active");

		  $(".tab_drawer_heading").removeClass("d_active");
		  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	 
	
	$(".tab_drawer_heading").on('click', function() {
      
       $(".tab_content").hide();
       var d_activeTab = $(this).attr("rel"); 
       $("#"+d_activeTab).fadeIn();
	  
	    $(".tab_drawer_heading").removeClass("d_active");
       $(this).addClass("d_active");
	  
	    $("ul.tabs li").removeClass("active");
	    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	


		 new WOW().init(); 
		 

	jQuery(window).stellar();


	$('.toggle-menu').jPushMenu();
	  $(document).on('click', function () {
        $('.cbp-spmenu-right').removeClass('menu-open');
    });
    $('#menu-toggle').on('click', function (e) {
        e.stopPropagation();
        $('.cbp-spmenu-right').toggleClass('menu-open');
    });



 
  
  
  });
