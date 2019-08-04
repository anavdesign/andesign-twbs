/**
 * Inject SVG Icon
 * Boolean value
 *
 * USAGE
  $('elm').injectSVG({
    iconName: 'name',
    injectMethod : 'append',
    width        : '16',
    height       : '16',
    viewBox      : '0 0 16 16'
  })
 */

(function ($, drupalSettings) {
  'use strict';

  var themePath = drupalSettings.path.themePath;

  $.fn.injectSVG = function (options) {
    var settings = $.extend({
      iconName     : '',
      injectMethod : 'append',
      svgWidth     : '16',
      svgHeight    : '16',
      viewBox      : '0 0 16 16'
    }, options),
      $svg = $(`<svg width=${settings.svgWidth} height=${settings.svgHeight} class=js-svg viewbox="${settings.viewBox}"><use xlink:href=#icon-${settings.iconName}></use></svg>`);
    $(this)[settings.injectMethod]($svg);
    return this;
  };

})(jQuery, drupalSettings);
