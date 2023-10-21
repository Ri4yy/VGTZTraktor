(function ($) {
    $('#openMenu, .overlay').click(() => {
        $('#openMenu').find('span').eq(0).toggleClass('rotate-left');
        $('#openMenu').find('span').eq(0).toggleClass('top-0');
        $('#openMenu').find('span').eq(2).toggleClass('rotate-right');
        $('#openMenu').find('span').eq(2).toggleClass('bottom-0');
        
        $('html').toggleClass('overflow-hidden');
        $('.overlay').toggleClass('opacity-0');
        $('.overlay').toggleClass('pointer-events-none');
    
        $('#openMenu').find('span').eq(1).toggleClass('translate-x-full');
        $('#mobileMenu').toggleClass('translate-x-full');
    }); 
    
    $('.dropdown-btn').click(() => {
        $('.dropdown-menu').slideToggle();
    
        $('.dropdown-btn').find('img').toggleClass('rotate-dropdown__arrow');
    });

    $(function(){
        $nav = $('.fixed-header');
        $window = $(window);
        $h = $nav.offset().top;
        $window.scroll(function(){
            if ($window.scrollTop() > $h){
                $nav.addClass('fixed');
                $('main').addClass('mt-[42px]');
            } else {
                $nav.removeClass('fixed');
                $('main').removeClass('mt-[42px]');
            }
        });
    });

    $(function () {
        $('ul.tabs__caption').on('click', 'li:not(.active-tab)', function () {
            $(this)
                .addClass('active-tab').siblings().removeClass('active-tab')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

        var tabIndex = window.location.hash.replace('#tab', '') - 1;
        if (tabIndex != -1) $('ul.tabs__caption li').eq(tabIndex).click();

        $('a[href*=#tab]').click(function () {
            var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '') - 1;
            $('ul.tabs__caption li').eq(tabIndex).click();
        });
    });

    $(function () {
        $('ul.tabs-char__caption').on('click', 'li:not(.active-tab__char)', function () {
            $(this)
                .addClass('active-tab__char').siblings().removeClass('active-tab__char')
                .closest('div.tabs-char').find('div.tabs-char__content').removeClass('active-char__content').eq($(this).index()).addClass('active-char__content');
        });

        var tabIndex = window.location.hash.replace('#tab', '') - 1;
        if (tabIndex != -1) $('ul.tabs-char__caption li').eq(tabIndex).click();

        $('a[href*=#tab]').click(function () {
            var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '') - 1;
            $('ul.tabs-char__caption li').eq(tabIndex).click();
        });
    });

    $('.popup-open').click(function() {
		$('.popup-fade').show( );
        $('html').addClass('overflow-hidden');
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').hide();
        $('html').removeClass('overflow-hidden');
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').hide();
            $('html').removeClass('overflow-hidden');
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).hide();					
            $('html').removeClass('overflow-hidden');
		}
	});

})(jQuery);