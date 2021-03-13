
/*===========================================*/
const $burger = $(".menu-burger");
const $menu = $(".menu");
const $header = $(".header");
$burger.on("click", openMenuBurger);
function openMenuBurger() {
  $burger.toggleClass("active");
  $($menu).slideToggle("fast", () => {});
}
window.addEventListener('scroll', debounce(addClassHeaderIfScroll, 100));

function addClassHeaderIfScroll(e) {
	if (pageYOffset > 100 && !$header.hasClass('active')) {
		$header.addClass('active')
	}
	else if (pageYOffset < 100) {
		$header.removeClass('active')
	}
}
/*===========================================*/
