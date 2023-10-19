(function ($) {
    $(function () {
        $('#openMenu, .overlay').click(() => {
            $('#openMenu').toggleClass('before:bottom-0');
            $('#openMenu').toggleClass('after:top-0');
            $('#openMenu').toggleClass('after:rotate-45');
            $('#openMenu').toggleClass('before:-rotate-45');
            
            $('html').toggleClass('overflow-hidden');
            $('.overlay').toggleClass('opacity-0');
            $('.overlay').toggleClass('pointer-events-none');

            $('#openMenu').find('span').toggleClass('translate-x-full');
            $('#mobileMenu').toggleClass('translate-x-full');
        }); 

        $('.dropdown-btn').click(() => {
            $('.dropdown-menu').slideToggle();

            $('.dropdown-btn').toggleClass('after:rotate-180');
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
})(jQuery);