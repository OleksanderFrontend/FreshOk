$(function () {
  $('.sale__slider').slick({
    // autoplay: true,
    // autoplaySpeed: 3000,
    fade: true,
    prevArrow: '<button type = "button" class = "slick-prev"><img src="../images/icons/arrow-left.svg" alt="Левая стрелка"></button>',
    nextArrow: '<button type = "button"class = "slick-next"><img src="../images/icons/arrow-right.svg" alt="Правая стрелка"></button>',
  });

  // $('.brands__items').slick({
  //   slidesToShow: 6
  // });

  // var mixer = mixitup('.top-products__сards');
  // var mixer = mixitup('.promotions__cards');
});

 var containerEl1 = document.querySelector('[data-ref="mixer-1"]');
 var containerEl2 = document.querySelector('[data-ref="mixer-2"]');

 var config = {
   controls: {
     scope: 'local'
   }
 };

 var mixer1 = mixitup(containerEl1, config);
 var mixer2 = mixitup(containerEl2, config);



//   $('.tabs-wrapper').each(function () {
//     let ths = $(this);
//     ths.find('.tab-item').not(':first').hide();
//     ths.find('.tab').on('click', function () {
//       ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
//       ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
//     }).eq(0).addClass('active');
//   });