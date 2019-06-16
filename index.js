$(document).ready(function() {
	// console.log("hoho");

	$(".button").click(function() {
		$(this).addClass('fullYellow');
		$(".un").css('opacity', '0');
		$(".done").css('opacity', '1');
		$(".dot").css('opacity', '1');
		$(".text").css('opacity', '1');
	});
});