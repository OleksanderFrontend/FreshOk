$(function () {
  $('.top-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: '<button type = "button" class = "slick-prev"><img src="../images/arrow-left.svg" alt="Левая стрелка"></button>',
    nextArrow: '<button type = "button"class = "slick-next"><img src="../images/arrow-right.svg" alt="Правая стрелка"></button>',
  });

  // $('.tab').on('click', function (e) {
  //   e.preventDefault();

  //   $('.tab').removeClass('tab--active');
  //   $('.tab-content').removeClass('tab-content--active');

  //   $(this).addClass('tab--active');
  //   $($(this).attr('href')).addClass('tabs-content--active');
  // });

  $('.tabs-wrapper').each(function () {
    let ths = $(this);
    ths.find('.tab-item').not(':first').hide();
    ths.find('.tab').on('click', function () {
      ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });
});