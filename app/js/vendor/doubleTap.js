
/**
 * DoubleTap
 * Drop-Down Navigation: Responsive and Touch-Friendly
 * By Osvaldas Valutis, www.osvaldas.info
 * Available for use under the MIT License
 * http://tinyurl.com/hhbqdhm
 *
 * USAGE
 * $('source').doubleTap();
 */

(function ($, window, document, undefined) {
    "use strict";
    $.fn.doubleTap = function (params) {
        if (!('ontouchstart' in window) && !navigator.msMaxTouchPoints && !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) return false;

    this.each(function() {
      var curItem = false;

      $(this).on('click', function(e) {
        var item = $(this);
        if (item[0] != curItem[0]) {
          e.preventDefault();
          curItem = item;
        }
      });

      $(document).on('click touchstart MSPointerDown', function(e) {
        var resetItem = true,
          parents = $(e.target).parents();

        for (var i = 0; i < parents.length; i++)
          if (parents[i] == curItem[0])
            resetItem = false;

        if (resetItem)
          curItem = false;
      });
    });
    return this;
  };
})(jQuery, window, document);
