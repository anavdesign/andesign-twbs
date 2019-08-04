/**
 * Forms
 *
 */

(function ($) {

  'use strict';

  $(function() {

    // Disable Autocomplete on text Fields
    $('input[type="search"], input[type="text"]').attr('autocomplete', 'off');

    // Add Placeholder Attribute
    $('.block-search input[type="search"]').attr('placeholder', 'Search');

  });

})(jQuery);
