head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	$('.nav-btn').on('click', function() {
		if ($(this).hasClass('is-active')) {
			$('.nav-mob').removeClass('is-open');
			$(this).removeClass('is-active');
		}
		else {
			$('.nav-mob').addClass('is-open');
			$(this).addClass('is-active');
		};
		return false;
	});
	//scroll fixed
	$(window).scroll(function () {
		var $this = $(this),
			$head = $('.body');
			if ($this.scrollTop() > $('.content').offset().top) {
				$head.addClass('is-icons');
				$('.header').addClass('is-active');
			} else {
				$head.removeClass('is-icons');
				$('.header').removeClass('is-active');
			};
	});	
	$(window).scroll(function () {
		var $this = $(this),
			$header = $('.header');
			if ($this.scrollTop() > 113) {
				$header.addClass('is-fixed');
				$('.body').addClass('is-fixed');
			} else {
				$header.removeClass('is-fixed');
				$('.body').removeClass('is-fixed');
			};
	});	
	if ($(document).scrollTop() > 113) {
		$('.header').addClass('is-fixed');
        $(".body").addClass("is-fixed");	
	}
	else {
		$('.header').removeClass('is-fixed');
        $(".body").removeClass("is-fixed");
	};
	if ($(document).scrollTop() > $('.content').offset().top) {
        $(".body").addClass("is-fixed");	
        $(".body").addClass("is-icons");	
				$('.header').addClass('is-active');
	}
	else {
        $(".body").removeClass("is-fixed");
        $(".body").removeClass("is-icons");
				$('.header').removeClass('is-active');
	};
	//popup
	$('.js-form').on('click', function() {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.js-popup').removeClass('is-active');
			$('body').removeClass('no-scroll');
		}
		else {
			$(this).addClass('is-active');
			$('.js-popup').addClass('is-active');	
			$('body').addClass('no-scroll');		
		};
		return false;
	});
	$('.overlay').on('click', function() {
		$(this).removeClass('is-active');
		$('.js-popup').removeClass('is-active');
		$('body').removeClass('no-scroll');
		return false;
	});
	// $('.js-close').on('click', function() {
	// 	$(this).removeClass('is-active');
	// 	$('.js-popup').removeClass('is-active');
	// 	$('body').removeClass('no-scroll');
	// 	return false;
	// });
	//tabs
	$('.form__tabs a').click(function(event) {
		/* Act on the event */
		$('.form__tabs a').removeClass('is-active');
		$(this).addClass('is-active');
		attr = $(this).attr('href');
		$('#is-in,#is-out').addClass('is-hidden');
		$(' '+attr).removeClass('is-hidden');
		return false;
	});
	//form
	$('.form__bottom a').click(function(event) {
		/* Act on the event */
		$('.form__bottom a').removeClass('is-active');
		$(this).addClass('is-active');
		attr = $(this).attr('href');
		$('#form1,#form2,#form3,#form4,#form5,#form6,#form7').addClass('is-hidden');
		$(' '+attr).removeClass('is-hidden');
		return false;
	});
	$('.js-is-in').on('click', function() {
		$('.form__block').addClass('is-hidden');
		$('.form-1').removeClass('is-hidden');
		return false;		
	});
	$('.js-is-out').on('click', function() {
		$('.form__block').addClass('is-hidden');
		$('.form-4').removeClass('is-hidden');
		return false;		
	});
});