
(function($) {

  'use strict';

  $(function() {

    viewportWidth();
    viewportHeight();

    $(window).resize(function () {
      viewportWidth();
      viewportHeight();
    });

    function viewportWidth() {
      $('#layout-viewport-size__width span:last-child').html($(window).outerWidth());
    }

    function viewportHeight() {
      $('#layout-viewport-size__height span:last-child').html($(window).outerHeight());
    }

  });

}(jQuery));
