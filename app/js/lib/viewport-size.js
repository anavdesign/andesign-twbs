/**
 * @file
 * Breakpoints
 *
 */

(function($) {

  'use strict';

  $(function() {

    // Display window width at page load
    viewportWidth();
    viewportHeight();

    // Update window width on resize
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
