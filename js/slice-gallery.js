
(function($) {

  'use strict';

  $(function() {

    $('.slice-gallery-items').each(function() {
        $(this).magnificPopup({
            delegate: '.field__item a',
            type: 'image',
            gallery: {
              enabled:true
            }
        });
    });

  });

}(jQuery));
