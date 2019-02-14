'use strict';

import $ from "jquery";
var Cookies = require('./vendor/js-cookie');
require('./scroll-to-top-for-hash');
var iFrameResize = require('./vendor/iframeResizer');
var calculateAnchorPosition = require('./calculate-anchor-position');

import "dkfds";


$(document).ready(function () {
  // Initialize The style switcher fill
  $('.style-switcher').val(window.curStyle);
  $('.style-switcher').on('change', function () {
    if (window.curStyle !== this.value) {
      var onlyUrl = window.location.href.replace(window.location.search, '');
      var url = (onlyUrl.indexOf('#') != -1 ? onlyUrl.split('#')[0]+'?s='+this.value : onlyUrl + '?s='+this.value);
      window.location = url;
    }
  });

  // Add style when navigating 
  $('a').on('click', function (e) {
    var hashLocation  = $(this).attr('href').split('#')[ 1 ];
    if(hashLocation == undefined){ //if normal link
      e.preventDefault();
      var onlyUrl =  $(this).attr('href');
      var s = (window.curStyle != undefined && !onlyUrl.includes('http') ? '?s='+window.curStyle : "");
      var url = (onlyUrl.indexOf('#') != -1 ? onlyUrl.split('#')[0]+s+'#'+ onlyUrl.split('#')[1] : onlyUrl + s);
      var target =  $(this).attr('target');
      var blank = false;
      if(target != undefined) {
          blank = target.includes('blank') ? true : false;
      }
      if(blank) {
          window.open(
              url,
              '_blank' // <- This is what makes it open in a new window.
          );
      } else {
          window.location.href = url;
      }
    }
  });

  // Add style to preview-iframes
  var previewElements = document.getElementsByClassName('preview-iframe');
  for (var j = previewElements.length - 1; j >= 0; j--) {
    if (window.curStyle){
      previewElements[j].src = previewElements[j].src + '?s=' + window.curStyle;
    }
  }

  //O

  iFrameResize({ log: false, heightCalculationMethod: 'taggedElement', resizeFrom: 'child' }, '.preview-iframe');

  //quick fix to trigger iframeresizer. 
  setTimeout(function () {
    var iframes = $('.preview-iframe');
    iframes.each(function(index) {
      if($(this)[0].iFrameResizer !== undefined){
        $(this)[0].iFrameResizer.resize();
      }
    });
  }, 2000);
});


//Below: resize the iframe to different sizes. Not used anymore.
/*
// Initialize the component previews
var activePreview = function(btnClicked){
  var $width = undefined;
  var $iframe = $('.component-preview').find('iframe');

  switch (btnClicked.id) {
    case 'mobil':
      $width = '375px';
      break;
    case 'tablet':
      $width = '768px';
      break;
    case 'desktop':
      $width = '1170px';
      break;
    default:
      return;
  }
  $iframe.attr({ width: $width });

  $('.is-active').removeClass('is-active');
  $('button[id=' + btnClicked.id + ']').addClass('is-active');
  Cookies.set('selected-preview', btnClicked.id);
};


// $(document).ready(function () {
var currentlyClicked = Cookies.get('selected-preview');
if (currentlyClicked == null) {
  currentlyClicked = 'desktop'; //mobil, tablet, desktop (not full)
}
$('#'+currentlyClicked).each(function() {
  activePreview(this);
});

iFrameResize({ log: false, heightCalculationMethod: 'taggedElement', resizeFrom: 'child' }, '.preview-iframe');

$('.component-preview-button').on('click', function () {
  if(this.id != 'full') {
    activePreview(this);
  }
});
*/
