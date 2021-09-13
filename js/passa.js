// function for Stylo Site


var slideshowHeight =0;
var headerHeight =0;
var headertop = 0;
	
//actions on scroll
$(window).scroll(function() {
    // change class of header to a background
	// slide scroll down button
	slideshowHeight = $('#slideshow-outer').height();
	headerHeight = $('#header').height();
	//var headertop = $("#header").offset().top;
	headertop = $(window).scrollTop();
	
	if (headertop > slideshowHeight-headerHeight*6) {
        $("#header").addClass("scrollBg");
		//$('.scroll-button-outer:eq(0)').hide()
		if($('.cycle-slide-active').hasClass('light')) {
			$('#logo,#levelOnecontainer,#hero-statement,#slide-title').removeClass('light');
		}
    } else {
        $("#header").removeClass("scrollBg");
		//$('.scroll-button-outer:eq(0)').show()
		if($('.cycle-slide-active').hasClass('light')) {
			$('#logo,#levelOnecontainer,#hero-statement,#slide-title').addClass('light');
		}
    }
	if (headertop > slideshowHeight/2) {
		$('.scroll-button-outer:eq(0)').fadeOut()
    } else {
		$('.scroll-button-outer:eq(0)').fadeIn()
    }
	if (headertop > slideshowHeight) {
		$('.cycle-slideshow').cycle('pause');
		//jQuery('#slide').cycle('pause');
    } else {
		$('.cycle-slideshow').cycle('resume');
    	//jQuery('#slide').cycle('resume');
    }
	
	
	// second slide down button
	// if ($("#header").offset().top > 1000) {
	if (headertop + $("#about").height()-slideshowHeight > $(window).height()) {
		$('.scroll-button-outer:eq(1)').fadeOut()
    } else {
		$('.scroll-button-outer:eq(1)').fadeIn()
    }
	// hero statement
	/*if ($("#hero-statement").offset().top > 200) {
        $("#hero-statement").addClass("hide");
    } else {
        $("#hero-statement").removeClass("hide");
    }*/
	// back to top button
	if($(window).scrollTop()+$(window).height()+400 >= $(document).height()) {
		$('.scroll-button-outer:eq(2)').fadeIn()													 
	} else {
		$('.scroll-button-outer:eq(2)').fadeOut()	
	}
	// sticky worknav filter
	headerHeight = $('#header').height();
	headertop = $("#header").offset().top;
	if (headertop +  headerHeight > $('#workNavSpacer').offset().top) {
		$('#workNav').addClass('fixedpos').css('top',headerHeight+1);
		$("#header").addClass('borderbottom');
	} else {
		$('#workNav').removeClass('fixedpos').css('top',0);
		$("#header").removeClass('borderbottom');
	}
	
	
});


$(function() {
	// lazyload the projects images
	/*
    $("#container img").lazyload({
		 threshold : 200,
		 effect : "fadeIn",
		 failure_limit : 100
	 });
	*/
	//page scrolling when hitting one of the buttons
	$('.page-scroll a').bind('click', function(event) { 
				var $anchor = $(this);
				if($anchor.attr('href') == '#projects') {
					var t = $($anchor.attr('href')).offset().top-90;
				} else {
				var t = $($anchor.attr('href')).offset().top;
				}
        $('html, body').stop().animate({
            scrollTop: t
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	$('.page-scroll-work a').bind('click', function(event) { 
		var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-$("#header").height()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
		
	// change the class on every cycle load for text colours
	$('.cycle-slideshow').on('cycle-initialized',function(e){
		if($('.cycle-slide-active').hasClass('light')) {
			$('#logo,#levelOnecontainer,#hero-statement,#slide-title').addClass('light');
		} else {
			$('#logo,#levelOnecontainer,#hero-statement,#slide-title').removeClass('light');
		}
	}).on('cycle-after',function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
		if($(incomingSlideEl).hasClass('light')) {
			$('#logo,#levelOnecontainer,#hero-statement,#slide-title').addClass('light');
		} else {
			$('#logo,#levelOnecontainer,#hero-statement,#slide-title').removeClass('light');
		}
	})
});


