
(function($) {

  'use strict';

  $(function() {

    $('.slice-masonry .slice-gallery-items').each(function() {

      $(this)
        .prepend('<div class=js-grid-sizer></div>')
        .masonry({
          itemSelector: '.slice-gallery-item',
          columnWidth: '.js-grid-sizer',
          percentPosition: true
        });

    });

  });

}(jQuery));
