//ハンバーガーメニュー
$(function () {
    var mvh = $('.home-wrapper').height();
    var amvh = $('.about-home').height();
    var cmvh = $('.contact-home').height();
    $('.burger-btn').on('click', function () {
        $('.body, .burger-btn, .page-header__list--contents').toggleClass('show');
        if ($(this).hasClass('show') || $(window).scrollTop() <= mvh || $(window).scrollTop() <= amvh || $(window).scrollTop() <= cmvh) {
            $('.burger-btn__bars span').css('background-color','#FFF');
            $('.burger-btn__text').css('color','#FFF');
          } else {
            $('.burger-btn__bars span').css('background-color','#000');
            $('.burger-btn__text').css('color','#000');
        }
    });
});


