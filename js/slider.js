sliderInt = 1;
sliderNext =2;

(function(){
	
	$("slider > img#1").fadeIn(300);
	startSlider();



})();

function startSlider(){
	var img ;
	count = $("#slider>img").length;
	loop = setInterval(function(){
		if (sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
		}

		$("#slider > img").fadeOut(300);
		$("#slider>img#" + sliderNext).fadeIn(300);

		sliderInt =sliderNext;
		sliderNext++;

	},3000)
	
}

function prev(){
	newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next(){
	newSlide = sliderInt + 1;
	showSlide(newSlide);
}
function stopLoop(){
	window.clearInterval(loop);
}

function showSlide(id){
	stopLoop();
	if (id > count) {
			id = 1;
		}
		
	 if (id < 1) {
			id = count;
		}

		$("#slider > img").fadeOut(300);
		$("#slider>img#" + id).fadeIn(300);

		sliderInt =id;
		id++;
		startSlider();
}

$("#slider>img").hover(
	function(){
		stopLoop();
		console.log("Slider stopped");

	},function(){
		startSlider();
		console.log("Slider started")
	}
);