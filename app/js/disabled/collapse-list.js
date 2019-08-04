/**
 * Collapse List
 *
 */

(function ($) {
  'use strict';

  $.collapseList = function() {
    var className = 'js-collapse-list';

    $('.collapse-list').addClass(className).each(function () {

      var $collapseList = $(this),
        $collapseTrigger = $collapseList.find('> li > h2');

      // Collapse List Setter
      $collapseList
        .find('> li') // Collapse Item
        .addClass(className + '__item') // Add Item Class Name
        .end()
        .find('> li > h2') // Collapse Trigger
        .addClass(className + '__trigger') // Add Trigger Class Name
        .wrapInner('<span class=' + className + '__trigger-text />') // Wrap Trigger Text
        .injectSVG({
          // Insert SVG Icon
          iconName: 'chevron-down'
        })
        .end()
        .find('> li > div') // Collapse Content
        .addClass(className + '__content') // Add Content Class Name
        .hide()
        .end()
        .find('> li.is-active') // Collapse Active Item
        .removeClass('is-active') // Remove Active Class
        .first() // Filter Active Items
        .addClass('js-is-active') // Add Active Class
        .children('div').show();

      // Click Function
      $collapseTrigger.click(function () {
        var $clickedTrigger = $(this), // The Clicked Trigger
          $clickedItem = $clickedTrigger.parent(), // The Clicked Item
          $clickedContent = $clickedTrigger.next();

        if ($collapseList.is('.collapse-list--accordion')) {

          if ($clickedContent.not(':visible')) {
            $clickedContent.slideDown(); // Expand
            $clickedItem
              .addClass('js-is-active')
              .siblings() // Collapse all Visible Items
              .children('div').each(function () {
                $(this).slideUp(function () {
                  $(this).parent().removeClass('js-is-active');
                });
              });
          }
        } else {

          // Collapse
          if ($clickedContent.is(':visible')) {
            $clickedContent.slideUp(function () {
              $clickedItem.removeClass('js-is-active');
            });

          // Expand
          } else {
            $clickedContent.slideDown();
            $clickedItem.addClass('js-is-active');
          }
        }

      });

    });

  };

})(jQuery);
