var slideIndex = 1;

showSlide(slideIndex);

function currentSlide(n){
	showSlide(slideIndex = n)
}

function showSlide(n){
	var i;
	var slide = document.getElementByClassName("myslides");
	if(n > slides.length){
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for(var i=0;i< Things.length;i++){
		slides[i].style.display = "none";
	}

	slides[slideIndex-1].style.display =  "block";
}

var slideIndex = 0;
showSlide();

function showSlide(){
	var i;
	var slides = document.getElementByClassName("myslides");
	for ( i =0; i< slides.length; i++) {
		slides[i].style.display = "none";

	}
	slideIndex++;
	if(slideIndex > slides.length) {
		slideIndex =1
	}
	slides[slideIndex-1].style.display ="block";
	setTimeout(showSlide,4000);
}
/*