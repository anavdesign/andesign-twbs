/**
 * Menu Enhancements
 *
 */

(function ($) {

  'use strict';

  $(function() {

    var $menuItemExtended = $('.menu-item--expanded:has(> ul)')
      .add('.menu-item--expanded:has(> .menu--mega-menu-content)')
      .add('.block-expanded:has(> .block-content)');

    /**
     * Touch Friendly Drop Down Menu
     */
    $menuItemExtended.doubleTap();

    /**
     * HoverIntent
     */
    $menuItemExtended.hoverIntent({
      over: function () {
        $(this).addClass('js-active-trail');
      },
      timeout: 500,
      out: function () {
        $(this).removeClass('js-active-trail');
      }
    });

  });

})(jQuery);
