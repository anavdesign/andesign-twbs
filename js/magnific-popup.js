
$('.mfpopup-inline, [data-mfpopup-inline]').magnificPopup( {
  type:'inline',
  midClick: true,
  mainClass: 'mfp-fade',
  overflowY: 'scroll'
});

$('.data-mfpopup-image, [data-mfpopup-image], [data-mfpopup-zoom-image]').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', 
  closeOnContentClick: true,
  disableOn: 768,
  zoom: {
    enabled: true, 

    duration: 300, 
    easing: 'ease-in-out', 

    opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
});

$('.mfpopup-gallery, [data-mfpopup-gallery], [data-mfpopup-zoom-gallery]').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, 
        duration: 300, 
        easing: 'ease-in-out', 

        opener: function(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
});

$('.mfpopup-youtube, .mfpopup-vimeo, .mfpopup-gmaps, [data-mfpopup-youtube], [data-mfpopup-vimeo], [data-mfpopup-gmaps]').magnificPopup({
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
}).has('img')
  .addClass('js-video-icon')
  .append('<div class=js-video-play-icon />')
  .append('<div class=js-video-overlay />')
  .children('.js-video-play-icon')
  .injectSVG({
    iconName: 'play'
  });

$('.mfpopup-ajax, [data-mfpopup-ajax]').magnificPopup( {
  type: 'ajax',
  mainClass: 'mfp-fade',
  overflowY: 'scroll'
});
