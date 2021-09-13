$(document).ready(function(){
	
	// Start Lightbox
	$('a[rel~="lightbox"]').click(function(){
		$('.lightbox').css('display','block');
		$('.lightbox .overlay').css('opacity','0');
		$('.lightbox .modal').css('opacity','0');
		$('.lightbox h3').css('opacity','0');
		$('.lightbox h2').css('top','-25px');
		$('.lightbox p').css('opacity','0');
		$('.lightbox p').css('top','-25px');
		$('.lightbox .modal').animate({opacity:'1'},500);	
		$('.lightbox .overlay').animate({opacity:'.8'},500, function(){
			$('.lightbox h3').animate({opacity:'1'},1000);	
			$('.lightbox h2').animate({top:'0'},1000, function(){
				$('.lightbox p').animate({opacity:'1',top:'0'},1000);	
			});	
		});
	});
	
	// Close Lightbox
	$('.lightbox .modal a.close, .lightbox .overlay').click(function(){		
		$('.lightbox .overlay, .lightbox .modal').animate({opacity:'0'},250, function(){
			$('.lightbox').css('display','none');	
		});		
	});
	
	// Tell Safari not to move the window.
	function BlockMove(event) {
		event.preventDefault();
	}

});

