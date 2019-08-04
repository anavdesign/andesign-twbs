/**
 * Mobile Menu
 *
 */

(function ($) {

  'use strict';

  $(function() {

    /**
     * Mobile Menu Submenu Expanded
     */
    var $mobileNav = $('#layout-mobile-navigation');

    // Hide Expanded Submenu
    $mobileNav.find('.menu--submenu').hide();

    // Expand Submenu Click Event
    $mobileNav.find('.menu-link-chevron').click(function () {
      $(this)
        .parent().toggleClass('js-is-active')
        .next().slideToggle();
      return false;
    });

    // Toggle Mobile Menu
    $('.toggle-button--mobile-menu').click(function () {
      $('html').toggleClass('js-mobile-menu-active');

      return false;
    });

  });

})(jQuery);
