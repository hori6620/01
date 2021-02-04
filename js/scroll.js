
$(window).scroll(function() {
    var mvh = $('.home-wrapper').height();
    var amvh = $('.about-home').height();
    var cmvh = $('.contact-home').height();
    if ($(this).scrollTop() >= mvh || $(this).scrollTop() >= amvh || $(this).scrollTop() >= cmvh ) {
        $('.burger-btn__bars span').css('background-color','#000');
        $('.burger-btn__text').css('color','#000');
        $('.page-header__title').find('path').attr('fill','#000');
      } else {
        $('.burger-btn__bars span').css('background-color','#fff');
        $('.burger-btn__text').css('color','#fff');
        $('.page-header__title').find('path').attr('fill','#FFF');
    }
  });


