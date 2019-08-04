/**
 * Sticky Header
 *
 */

(function ($) {

  'use strict';

  $(function() {

    var $header = $('#layout-header'),
      $headerPlaceHolder = $('<div class=js-layout-header />');

    $('html').addClass('js-sticky-header');

    $header.css({
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      zIndex: 300
    });

    // Header Height Placeholder
    $headerPlaceHolder.insertAfter($header);

    function setHeaderHeight() {

      var fullHeight = $(window).height(),
          headerHeight = $header.height();

      // Add header current height value to placeholder
      $headerPlaceHolder.css('height', headerHeight);

      // The Height of the browser
      $('.slice-full-height .slice-content').css('min-height', fullHeight - headerHeight );

    }

    setHeaderHeight();
    $(window).resize(setHeaderHeight);


    // Media Query
    // enquire.register("screen and (max-width:767px)", {
    //   match : function () {

    //     $(window).resize(setHeaderHeight);
    //     $header.addClass('js-sticky-header');

    //   },
    //   unmatch : function () {

    //     Disable resize
    //     $(window).off('resize', setHeaderHeight);

    //     Remove sticky header class on desktop width
    //     $header.removeClass('js-sticky-header');

    //   },
    // });

  });

})(jQuery);
