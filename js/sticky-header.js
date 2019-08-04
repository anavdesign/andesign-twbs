
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

    $headerPlaceHolder.insertAfter($header);

    function setHeaderHeight() {

      var fullHeight = $(window).height(),
          headerHeight = $header.height();

      $headerPlaceHolder.css('height', headerHeight);

      $('.slice-full-height .slice-content').css('min-height', fullHeight - headerHeight );

    }

    setHeaderHeight();
    $(window).resize(setHeaderHeight);








  });

})(jQuery);
