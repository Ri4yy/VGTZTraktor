(function ($) {
    // Открытие мобильного меню
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

    // Фиксированная шапка при скролле
    $(window).on('load resize', () => {
        if($(window).width() > 1023) {
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
        } else {
            return 
        }
    })
   
    // Вкладки 
    function tabs(wrapperMain, wrapperTab, wrapperContent, activeTab, activeContent) {
        $(wrapperTab).on('click', 'li:not('+activeTab+')', function () {
            $(this)
                .addClass(activeTab).siblings().removeClass(activeTab)
                .closest(wrapperMain).find(wrapperContent).removeClass(activeContent).eq($(this).index()).addClass(activeContent);
        });

        var tabIndex = window.location.hash.replace('#tab', '') - 1;
        if (tabIndex != -1) $(wrapperTab+ ' li').eq(tabIndex).click();

        $('a[href*=\\#tab]').click(function () {
            var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '') - 1;
            $(wrapperTab +' li').eq(tabIndex).click();
        });
    }

    // Скрытие контента и кнопка "показать больше"
    function viewMoreContent(list, btn, showEl) {
        var list = list;
        var numToShow = showEl; 
        var button = btn;
        var numInList = list.length;
        list.hide();
        if (numInList > numToShow) {
        button.show();
        }
        list.slice(0, 6).show();
        button.click(function() {
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
            button.hide();
        }
        });
    }

    // Вызов функций
    tabs('.tabs', '.tabs__caption', '.tabs__content', 'active-tab', 'active');
    tabs('.tabs-char', '.tabs-char__caption', '.tabs-char__content', 'active-tab__char', 'active-char__content');
    viewMoreContent($(".wrapper-news .news"), $(".more-btn__news"), 2);

    $(document).ready(function() {
        viewMoreContent($(".tabs__content.active  .wrapper-items .item"), $(".tabs__content.active").find(".more-btn"), 3);

        $('.tabs__caption li').click((e) => {
            setTimeout(() => {
                viewMoreContent($(e.target).parents('.tabs').find('.tabs__content.active .wrapper-items .item'), $(".tabs__content.active").find(".more-btn"), 3);
            }, 50)
        });
    });

    // Модальное окно
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