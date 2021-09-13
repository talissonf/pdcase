$(function() {
    
    // Numerar os DIVS?
    $('#scroll > div').each(function(index) {
    		numero = index + 1;
    		$(this).prepend("<span>"+ numero + "</span>");
  });

    // Cycle
    
    $('.slideshow').cycle({
        fx: 'scrollRight',
        speed: 850,
        timeout: 4250,
        easing: 'easeOutQuad'
    });


    // Tem javascript?
    $('html').removeClass('no-js').addClass('js');



	// colocar icone de zoom
	$(".ampliar").after('<span class="iconezoom">+</span>');
	$(".slideshow:has(a)").after('<span class="iconezoom">+</span>');
   
    // mostrar ou esconder logo cumplice
    var footer = $('footer'),
        didResize = true,
        windowH = null;

    $(window).resize(function() {
        didResize = true;
    });

    setInterval(function() {
        if (didResize) {
            didResize = false;

            windowH = $(window).height();

            if (windowH < 600) {
                footer.fadeOut();
            } else {
                footer.fadeIn();
            }
        }
    }, 250);

    // Tooltip
    $("#sub a").tipTip();

    // Voltar para comeco
    $("a[href='#principal']").click(function() {
        $('html, body').animate({
            scrollLeft: 0
        }, 'slow');
        return false;
    });
   
    // Colorbox
    
    $(".slideshow a, .ampliar").colorbox({slideshow:true});
        

    // Placeholder
    $('input, textarea').placeholder();

});