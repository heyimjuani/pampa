(function($) {
  $(".slideshow").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true
  })
})(jQuery)
