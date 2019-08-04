/**
 * Scroll Top
 *
 */

(function ($) {

  'use strict';

  $(function() {

    var $scrollTop = $('#layout-scroll-top');
    if ($scrollTop.length) {

      // Scroll Top Click Event
      $scrollTop.click(function () {
        $('html, body')
          .animate({scrollTop : 0}, 800);
      });

      // Toggle Display On Scroll
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          $scrollTop.addClass('js-active');
        } else {
          $scrollTop
            .removeClass('js-active');
        }
      });
    }

  });

})(jQuery);
