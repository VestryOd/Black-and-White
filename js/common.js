$(document).ready(function() {
    var win_w = $(window).width();
    var win_h = $(window).height();
    
    ////////////////////////////////
    var $faceBtn = $('#posts .personal_links');
    var $faceLinks = $('.personal_links > ul');
 
    $($faceBtn).hover(function() {
        var i = $faceBtn.index(this);
        $($faceLinks[i]).fadeToggle(600);
    });
    /////////////////////////////////
    $('.categories_list li span').on('click', function() {
        var itemClick = $(this).closest('li');
            itemClick.toggleClass('active');
      if (itemClick.hasClass('active')){
       itemClick.children('ul').slideDown();
      }else{
       itemClick.find('li').removeClass('active');
       itemClick.find('ul').slideUp();
      }
    });
});
