$(document).ready(function () {
    $(window).resize(function() {
        if ($(window).width() >= 800) {
          $('.ul-large').removeClass('show-menu');
        } else {
          $('.show-menu').show();
        }
      });

    $('.menu-btn').click(function (e) { 
        $('.ul-large').toggleClass('show-menu anim');
        // $('nav').css({
        //     'transition':'all 0.5s'
        // });
        $('.logo').toggleClass('bigger');
    });
});
