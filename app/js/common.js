$(document).ready(function() {
    var win_w = $(window).width();
    var win_h = $(window).height();
    
    var menu = $("#header #menu");
    $(menu).css("height", win_h);
    
    var menuBar = $("#header #menu_bar");
    var menuClose = $("#menu #close_btn");
    
    menuBar.click(function() {
        $("#header #menu").removeClass("fadeOutRight").toggleClass("fadeInRight").removeClass("hidden");
    });
    menuClose.click(function() {
        $("#header #menu").removeClass("fadeInRight").toggleClass("fadeOutRight");
    });
    
    //black to white images
    $('.bwWrapper').BlackAndWhite({
    hoverEffect : true, // default true
    // set the path to BnWWorker.js for a superfast implementation
    webworkerPath : false,
    // to invert the hover effect
    invertHoverEffect: false,
    // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
    intensity:.6,
    // this option enables/disables the attribute crossorigin=anonymous on image tags. Default true.
    // please refer to https://github.com/GianlucaGuarini/jQuery.BlackAndWhite#important
    crossOrigin: true,
    speed: { //this property could also be just speed: value for both fadeIn and fadeOut
        fadeIn: 700, // 200ms for fadeIn animations
        fadeOut: 800 // 800ms for fadeOut animations
    },
    onImageReady:function(img) {
    	// this callback gets executed anytime an image is converted
    }  
    });
    
    //fancybox
    
    ;( function( $ ) {
        $( '.swipebox' ).swipebox( {
		useCSS : true, // false will force the use of jQuery for animations
		useSVG : true, // false to force the use of png for buttons
		initialIndexOnArray : 0, // which image index to init when a array is passed
		hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
		removeBarsOnMobile : true, // false will show top bar on mobile devices
		hideBarsDelay : 3000, // delay before hiding bars on desktop
		videoMaxWidth : 1140, // videos max width
		beforeOpen: function() {}, // called before opening
		afterOpen: null, // called after opening
		afterClose: function() {}, // called after closing
		loopAtEnd: false // true will return to the first image after the last image is reached
	   } );
        
	   $( '.swipebox' ).swipebox();

    } )( jQuery );
});