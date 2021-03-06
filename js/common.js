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

	//select
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-select-list").hide();
	        $(".js-select").removeClass("is-active");
	    });
	    function selectList() {
	        var select = $(".js-select");
	        var select_list = $(".js-select-list");
	        $("body").on("click", ".js-select", function(event){
	            if ($(this).hasClass("is-active")) {
	                select.removeClass("is-active");
	                select_list.hide();
	            }
	            else {
	                select.removeClass("is-active");
	                select_list.hide();
	                $(this).find(".js-select-list").show();
	                $(this).addClass("is-active");
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-select-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-select").find(".js-select-text").text(text);
	            $(this).parents(".js-select").find(".js-select-input").val(id);
	            $(this).parent().hide();
	            $(this).parents(".js-select").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    
	    selectList();
	    $("body").on("click", ".js-select", function(event){
	        event.stopPropagation();
	    });
	    
	});

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
		$('.js-form').removeClass('is-active');
		$('body').removeClass('no-scroll');
		return false;
	});
	// $('.js-close').on('click', function() {
	// 	$(this).removeClass('is-active');
	// 	$('.js-popup').removeClass('is-active');
	// 	$('body').removeClass('no-scroll');
	// 	return false;
	// });
	
	//circle
	var circles = $('.circles');

	if ( circles.length ) {

	    var circlesMain     = circles.find('.circles__items'),
	        circlesItem     = circles.find('.circles__item'),
	        centerBtn       = circles.find('.circles__center'),
	        circlesItems    = circlesItem.length,
	        step            = (360 / circlesItems),
	        activeClass     = 'is-active',
	        angle           = 0,
	        activeItemIndex = 0;

	    var rotateCircles = function(angle) {
	        circlesMain.css({
	            '-webkit-transform' : 'translateZ(0) rotate(' + angle + 'deg)',
	                '-ms-transform' : 'translateZ(0) rotate(' + angle + 'deg)',
	                    'transform' : 'translateZ(0) rotate(' + angle + 'deg)'
	        });

	        circlesItem.css({
	           '-webkit-transform' : 'translateZ(0) rotate(' + -angle + 'deg)',
	               '-ms-transform' : 'translateZ(0) rotate(' + -angle + 'deg)',
	                   'transform' : 'translateZ(0) rotate(' + -angle + 'deg)'
	        });
	    };

	    circlesItem.each(function(index, el) {

	        $(el).on('click', function(event) {
	            event.preventDefault();
	          	// $(circlesItem[activeItemIndex]).removeClass(activeClass);
	          	// $(el).addClass(activeClass);

	            angle           = step * index;
	            activeItemIndex = index;

	            rotateCircles(angle);
	        });

	    });

	    centerBtn.on('click', function(event) {
	        event.preventDefault();

	        var itemToClick;

	        if ( activeItemIndex < circlesItems - 1 ) {
	            itemToClick = activeItemIndex + 1;
	        } else {
	            itemToClick = 0;
	        }

	        $(circlesItem[itemToClick]).trigger('click');

	    });

	};
	var tabsFunc = function() {

	    var container = $('.js-tab-container');

	    if ( container.length ) {
	        container.each(function() {
	            var el           = $(this),
	                tab          = el.find('.js-tab'),
	                content      = el.find('.js-tab-content'),
	                activeClass  = 'is-active',
	                tabs         = [],
	                tabsContent  = [],
	                activeTab;
	            //create associative array with tabs content as jQuery object
	            content.each(function() {
	                var tabNumber = $(this).data('tab');
	                tabsContent[tabNumber] = $(this);
	            });

	            tab.each(function() {
	                var el        = $(this),
	                    tabNumber = el.data('tab');

	                //create associative array with tabs as jQuery object
	                tabs[tabNumber] = el;

	                if ( el.hasClass(activeClass) ) {
	                    activeTab = tabNumber;
	                }

	                el.on('click', function(event) {
	                    event.preventDefault();

	                    tabs[activeTab].removeClass(activeClass);
	                    tabsContent[activeTab].removeClass(activeClass);

	                    el.addClass(activeClass);
	                    tabsContent[tabNumber].addClass(activeClass);

	                    activeTab = tabNumber;
	                });
	            });

	            //if active tab is not defined then make first tab as active
	            if ( !activeTab ) {
	                activeTab = 1;
	                tabs[activeTab].addClass(activeClass);
	                tabsContent[activeTab].addClass(activeClass);
	            }
	        });
	    }

	};
	tabsFunc();
	//form

	//tabs
	$('.form__tabs a').click(function(event) {
		/* Act on the event */
		if ($(this).hasClass('js-is-in')) {
			$('.js-is-out').removeClass('is-active');
			$('.js-is-in').addClass('is-active');
		}
		else {

			$('.js-is-out').addClass('is-active');
			$('.js-is-in').removeClass('is-active');
		};		
		attr = $(this).attr('href');
		$('#is-in,#is-out').addClass('is-hidden');
		$(' '+attr).removeClass('is-hidden');
		return false;
	});

	var mytime;

	function Time() {
	    mytime = setTimeout(function(){ 
			$('.js-finish').addClass('is-hidden');
			$('.js-finish-next').removeClass('is-hidden');
	    },7000);
	};
	$('.js-finish-btn').on('click', function() {
		Time();
	});
	function TimeStop() {
	    clearTimeout(mytime);
	};
	$('.form__tabs a').on('click', function() {
		TimeStop();
	});
	$('.to-site').on('click', function() {
		TimeStop();
	});

	$(".js-step").click(function () {
	// This will have the category
		var id = $(this).data("btn"),
		// All items
			$item = $('.js-block');

	// Current item is should be active
		var $currItem = $('.js-block[data-block=' + id + ']');
		$('.js-block[data-block=' + id + ']').removeClass('is-hidden');
	// Remove the active class for other items
		$item.not($currItem).addClass('is-hidden');
		return false;
	});

	$('.js-topper-close').on('click', function() {
		$('.js-topper').slideToggle('fast');
	});
});