/**
 * @file
 * Scritps
 *
 */

(function ($) {

  'use strict';

  $(function() {
    /*
     * Non Touch Device Scripts
     */
    // var isTouch = 'ontouchstart' in document.documentElement;

    // if (!isTouch) {
        // Non Touch Device
        // Add Non Touch Device Scripts Here
    // }

    /*
     * Open All External Links In New Window
     */
    // $('a').filter(function() { return this.hostname && this.hostname !== location.hostname; }).attr('target', '_blank');

    // $.anchorTextWrap('.menu-main a');

    /**
     * Disable Link
     */
    $('[data-link-disable], .disable-link, .menu-link--disable').click(function () {
        return false;
    });

    /**
     * Objectfit Fallback
     */
    // $('.objectfit-fallback').objectfitFallback();

    /**
     * SVG Fallback for older browsers
     */
    svg4everybody();

  });

})(jQuery);
