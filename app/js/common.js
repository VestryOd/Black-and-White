$(document).ready(function() {
    var win_w = $(window).width();
    var win_h = $(window).height();
    
    var menu = $("#header #menu");
    $(menu).css("height", win_h);
    
    var menuBar = $("#header #menu_bar");
    
    menuBar.click(function() {
        var menu = $("#header #menu").toggleClass("acive");
    });
});