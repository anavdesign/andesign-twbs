
(function ($) {

  'use strict';

  $(function() {

    var $scrollTop = $('#layout-scroll-top');
    if ($scrollTop.length) {

      $scrollTop.click(function () {
        $('html, body')
          .animate({scrollTop : 0}, 800);
      });

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
