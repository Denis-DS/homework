$('.nav').each(function(){
  var holder = $(this);
  var btn = holder.find('#nav-opener');
  btn.on('click', function(e){
    e.preventDefault();
    holder.toggleClass('active');
  })
});

$('.artic-questions').each(function(){
  var holder = $(this);
  var btn = holder.find('.bttn');
  var bt = holder.find('.fa-plus');
  var ques = holder.find('.text-questions')
  btn.on('click', function(e){
    e.preventDefault();
    holder.toggleClass('active');
    bt.addClass('fa-minus').toggleClass('fa-plus');
  })
})



$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides (n){
	var i;
	var slides = document.getElementsByClassName("alon");
	var dots = document.getElementsByClassName("dot");
	var icon = document.getElementsByClassName("far");

	if (n > slides.length) {
		slideIndex = 1
	}

	if (n < 1) {
		slideIndex = slides.length
	}

	for (i=0; i <slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i=0; i <dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active","");
	}

	for (i=0; i <icon.length; i++) {
		icon[i].className = icon[i].className.replace(" fas","");
	}

	slides[slideIndex-1].style.display = "flex";
	dots[slideIndex-1].className +=" active";
	icon[slideIndex].className +=" fas";
}














