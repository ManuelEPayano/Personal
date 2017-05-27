$(document).ready(function(){
	$(".cross").hide();
	$(".drop_down_menu").hide();
	//$(".side_menu").hide();
	$( ".hamburger" ).click(function() {
	$( ".drop_down_menu" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".drop_down_menu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});
});

