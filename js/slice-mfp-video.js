
(function($) {

  'use strict';

  $(function() {

    $('.slick a[href*="youtube.com/watch"]').magnificPopup({
        type: 'iframe',
        iframe: {
          patterns: {
            youtube: {
              index: 'youtube.com',
              id: 'v=',
              src: '//www.youtube.com/embed/%id%?autoplay=0&rel=0'
            }
          }
        },
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

  });

}(jQuery));
