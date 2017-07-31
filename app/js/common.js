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
});