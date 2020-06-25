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
	$('.navbar-burger').click(function () {

		// Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
		$('.navbar-burger').toggleClass('is-active');
		$('.navbar-menu').toggleClass('is-active');
	});

	/**
	* @function
	* @description Accordion
	*/
	$('.accordion__header').click(function () {

		$('.accordion__body').not($(this).next()).slideUp(400);
		$(this).next().slideToggle(400);

		$('.accordion__item').not($(this).closest('.accordion__item')).removeClass('open-accordion');
		$(this).closest('.accordion__item').toggleClass('open-accordion');
	});

});
