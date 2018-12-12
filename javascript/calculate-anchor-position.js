var $ = require('jquery');

/* Calculates what scrollTop should be in order to
 * show an anchor properly under the header
 * and lined up with the nav like the H1
 */
var calculateAnchorPosition = function (hash) {
  var anchor        = $('#' + hash);
  var topOffset     = 0;
  if (anchor.length === 0) {
    return topOffset;
  }

  //anchor should now align with first item inside nav
  return anchor.offset().top - topOffset;
};


module.exports = calculateAnchorPosition;
