(function($) {
  $(function() {
    // Stick the #nav to the top of the window
    var nav = $('#navigation');
    var isFixed = false;
    var $w = $(window);
    var margin = 100;

    function fixStyle() {
      var scrollTop = $w.scrollTop();
      var shouldBeFixed = scrollTop > margin;

      if (shouldBeFixed && !isFixed) {
        nav.addClass('scrolled-nav');
        nav.css({
          left: nav.offset().left,
          width: nav.width()
        });
        isFixed = true;
      } else if (!shouldBeFixed && isFixed) {
        nav.removeClass('scrolled-nav');
        isFixed = false;
      }
    }

    fixStyle();
    $w.scroll(fixStyle)
  });
})(jQuery)
