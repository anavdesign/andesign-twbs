/**
 * @file
 * Magnific Popup
 * http://dimsemenov.com/plugins/magnific-popup/documentation.html
 */

(function ($) {

  'use strict';

  $(function() {

    // Inline
    $('.mfpopup-inline, [data-mfpopup-inline]').magnificPopup({
      type:'inline',
      midClick: true,
      mainClass: 'mfp-fade',
      overflowY: 'scroll'
    });

    // Image
    $('.mfpopup-image, [data-mfpopup-image]').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below
      closeOnContentClick: true,
      disableOn: 768,
    });


    // Image
    $('.mfpopup-image-zoom, [data-mfpopup-image-zoom]').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below
      closeOnContentClick: true,
      disableOn: 768,
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });

    // Image Gallery
    $('.mfpopup-gallery, [data-mfpopup-gallery], [data-mfpopup-zoom-gallery]').each(function() {
        $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          mainClass: 'mfp-with-zoom', // this class is for CSS animation below
          gallery: {
            enabled: true
          },
          zoom: {
            enabled: true, // By default it's false, so don't forget to enable it
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
              // openerElement is the element on which popup was initialized, in this case its <a> tag
              // you don't need to add "opener" option if this code matches your needs, it's defailt one.
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
          }
        });
    });

    // Media
    $('.mfpopup-youtube, .mfpopup-vimeo, .mfpopup-gmaps, [data-mfpopup-youtube], [data-mfpopup-vimeo], [data-mfpopup-gmaps]').magnificPopup({
        // disableOn: 700,
        type: 'iframe',
        iframe: {
          patterns: {
            youtube: {
            index: 'youtube.com',
            id: 'v=',
            src: '//www.youtube.com/embed/%id%?rel=0&autoplay=1'
            }
          }
        },
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Ajax
    $('.mfpopup-ajax, [data-mfpopup-ajax]').magnificPopup({
      type: 'ajax',
      mainClass: 'mfp-fade',
      overflowY: 'scroll'
    });

  });

})(jQuery);
