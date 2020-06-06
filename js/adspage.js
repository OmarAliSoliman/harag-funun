$(document).ready(function(){

  $('.slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-bottom'
  });
  $('.slider-bottom').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-top',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

})