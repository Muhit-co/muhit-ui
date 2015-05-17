$(document).ready(function() {

	console.log('ready');
	$('.hasDropdown > a').click(function() {
		$(this).closest('.hasDropdown').toggleClass('dropdownIsOpen');
		$(this).find('.ion-chevron-down, .ion-chevron-up').toggleClass('ion-chevron-down').toggleClass('ion-chevron-up');
	});

});