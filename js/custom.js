jQuery(document).ready(function($) {
	$("#mobile-menu").mmenu({
	 // Options
	});
	var API = $("#mobile-menu").data( "mmenu" );

	$("#mobile-menu-open").click(function() {
	 	API.open();
	});
});