require(['/widget/slider/idangerous.swiper.min.js'], function (Swiper) {
    $(function(){

      $('.swiper-container, .swiper-slide').css({
        'width': $(window).width() + 'px',
        'height': '200px'
      });

      var mySwiper = $('.swiper-container').swiper({
        //Your options here:
        mode:'horizontal',
        loop: true,
        autoplay: 3000,
        pagination: '.pagination',
        //etc..
      });
    });
});