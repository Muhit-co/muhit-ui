$(document).ready(function() {

  // touch device detection
  $touch = ( navigator.userAgent.match(/(Android|webOS|iPad|iPhone|iPod|BlackBerry)/i) ? true : false );
  var touchEvent = $touch ? 'touchstart' : 'click';

  // dropdown toggle
	$('.hasDropdown > a').bind(touchEvent, (function(e) {
		$(this).closest('.hasDropdown').toggleClass('dropdownIsOpen');
		$(this).find('.ion-chevron-down, .ion-chevron-up').toggleClass('ion-chevron-down').toggleClass('ion-chevron-up');
	}));

  // dialog open
  $('a[data-dialog]').bind(touchEvent, (function(e) {
    $dest = $(this).attr('data-dialog');
    $('#' + $dest).addClass('isVisible');
    $('#dialog_mask').addClass('isVisible');
  }));

  // dialog close
  $('#dialog_mask, #closeDialog').bind(touchEvent, (function(e) {
    $('dialog').removeClass('isVisible');
    $('#dialog_mask').removeClass('isVisible');
    e.preventDefault();
  }));

  // toggles dialog close on Esc key
  $('body').bind('keyup', (function(e) {
    if(e.keyCode == 27) {
      $('dialog').removeClass('isVisible');
      $('#dialog_mask').removeClass('isVisible');
    }
    e.preventDefault();
  }));

});