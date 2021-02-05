$(document).ready(function() {
	let i = 1;
	let total = 10;
	// $("#image-container").css("background-image", "url(" + images[0] + ")");
	setInterval(function(){ changeImage(i++%3); }, 5000);
});

function changeImage(i) {
	$(".image").hide();
	$("#image-" + i).show();
}
