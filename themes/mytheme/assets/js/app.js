document.addEventListener("DOMContentLoaded", function() {

/**
 * @function
 * @description Swiper Home Page
 */
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});


/**
* @function
* @description Hamburger Menu
*/
	$(".navbar-burger").click(function () {

		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");
	});

});
