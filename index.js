$(document).ready(function() {
	// console.log("hoho");
	$(".center").mousemove(function() {
		var pageX = event.pageX - $(this).offset().left;
		var pageY = event.pageY - $(this).offset().top;

		console.log("X: " + pageX + "  Y: " + pageY);
	});

	$(".asus").click(function() {
		$(".1-left").toggleClass('none');
		$(".2-left").toggleClass('none');

		$(".1-right").toggleClass('none');
		$(".2-right").toggleClass('none');

		$(".price").toggleClass('none');
	});

	$(".price").click(function() {
		$(".2-left").toggleClass('none');
		$(".3-left").toggleClass('none');

		$(".2-right").toggleClass('none');
		$(".3-right").toggleClass('none');

		$(".asus").toggleClass('none');

		$(".detail").toggleClass('none');

	});

	$(".detail").click(function() {
		$(".left, .right, .center, #cart").toggleClass('none');
	});








	$(".button").click(function() {
		$(this).addClass('fullYellow');
		$(".un").css('opacity', '0');
		$(".done").css('opacity', '1');
		$(".dot").css('opacity', '1');
		$(".text").css('opacity', '1');
	});
});