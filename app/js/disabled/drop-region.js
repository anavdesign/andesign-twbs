/**
 * @file
 * Drop Region
 * Append elements into drop regions
 *
 * Usage
 *
 * data-drop-region='{
 *   "region": "menu-mobile",
 *   "header": "User Menu",
 *   "order": "first",
 *   "clone": true
 * }'
 *
 */

(function ($) {
  'use strict';

  $.dropRegion = function() {

    // Convert data-options attribute into an object of key/value pairs
    function getDataOptions(options) {
      return (!options || typeof JSON.parse !== 'function') ? {} : options;
    }

    var $dropRegionItems = $('[data-drop-region]');

    if($dropRegionItems.length > 0) {

      $dropRegionItems.each(function(i) {

        // Get Data Region Vales
        var $dropRegionItem = $(this),
          dropRegionOptions = getDataOptions( $dropRegionItem ? $dropRegionItem.data('drop-region') : null ),
          dataRegion = dropRegionOptions.region,
          dataHeader = dropRegionOptions.header,
          dataOrder = dropRegionOptions.order,
          dataClone = dropRegionOptions.clone;

        // console.log(`${i}. Data Region: ${dataRegion}`);
        // console.log(`${i}. Data Header: ${dataHeader}`);
        // console.log(`${i}. Data Order: ${dataOrder}`);
        // console.log(`${i}. Data Clone: ${dataClone}`);

        if( dataRegion != null ) {

          var dropRegion = dataRegion ? dataRegion : null,
            dropHeader = dataHeader ? dataHeader : null,
            dropOrder = dataOrder ? dataOrder : null,
            dropClone = dataClone ? dataClone : null,
            $dropRegion = $(`#drop-region-${dropRegion}`),
            dropRegionItemCount = $dropRegion.children().length;

          // Clone The Drop Region Item
          if( dropClone === true ) {

            $dropRegionItem = $dropRegionItem.clone();

          }

          // Wrap and Select Parent Element
          $dropRegionItem = $dropRegionItem
            .removeAttr('data-drop-region')
            .wrap(`<div class="js-drop-region__item js-drop-region-${dropRegion}__item" />`).parent();

          /*
           * Drop Region Mobile Menu Setup
           */

          if(dropRegion === 'menu-mobile' && $dropRegionItem.children('ul').hasClass('menu--dropdown')) {

            $dropRegionItem.children('ul')
              .removeClass('menu--dropdown menu--dropdown-icon')
              .addClass('menu--expanded menu--expanded-icon');

          }

          /*
           * Append Drop Region Header
           */

          if(dropHeader != null) {

            $dropRegionItem.prepend(
              $(`<h2>${dropHeader}</h2>`)
                .addClass('js-drop-region__header')
                .addClass(`js-drop-region-${dropRegion}__header`)
            );

          }

          /*
           * Drop Region Inject and Order
           */

          // Append to drop region
          if( dropOrder === 'first' ) {

            // Append to top of menu
            $dropRegionItem
              .prependTo($dropRegion);

          } else if( dropOrder === 'last' || dropRegionItemCount < dropOrder) {

            // Append to end of Menu
            $dropRegionItem
              .appendTo($dropRegion);

          } else if( dropOrder != null ) {

            // Append in order using nth child
            $dropRegion
              .children(`:nth-child(${dropOrder})`)
              .before($dropRegionItem);

          } else {

            // Append to end of list if order is not supplied
            $dropRegionItem
              .appendTo($dropRegion);

          }

          // console.log(`${i}. Drop Region: ${dropRegion}`);
          // console.log(`${i}. Drop Header: ${dropHeader}`);
          // console.log(`${i}. Drop Order: ${dropOrder}`);
          // console.log(`${i}. Drop Clone: ${dropClone}`);

        }

      });

    };

  };

})(jQuery);
