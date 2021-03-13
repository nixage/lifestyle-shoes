/*============================================*/

function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

$('.slider-big').slick({
  slidesToShow: 1,
	swipe: false,
  arrows: false,
  fade: true,
	speed: 500,
  cssEase: 'linear',
	dots: false,
  asNavFor: '.slider-small',
	responsive: [
    {
      breakpoint: 1100,
      settings: {
				fade: false,
        arrows: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
				swipe: true,
				fade: false,
      }
    },
  ]
});
$('.slider-small').slick({
  slidesToShow: 5,
	vertical: true,
	autoplay: true,
	focusOnSelect: true,
	verticalSwiping: true,
  asNavFor: '.slider-big',
  dots: false,
	arrows: false,
});

/*============================================*/
