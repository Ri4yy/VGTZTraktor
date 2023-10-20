$('#openMenu, .overlay').click(() => {
    $('#openMenu').find('span').eq(0).toggleClass('rotate-45');
    $('#openMenu').find('span').eq(0).toggleClass('top-0');
    $('#openMenu').find('span').eq(2).toggleClass('-rotate-45');
    $('#openMenu').find('span').eq(2).toggleClass('bottom-0');
    
    $('html').toggleClass('overflow-hidden');
    $('.overlay').toggleClass('opacity-0');
    $('.overlay').toggleClass('pointer-events-none');

    $('#openMenu').find('span').eq(1).toggleClass('translate-x-full');
    $('#mobileMenu').toggleClass('translate-x-full');
}); 

$('.dropdown-btn').click(() => {
    $('.dropdown-menu').slideToggle();

    $('.dropdown-btn').toggleClass('after:rotate-180');
});
(function ($) {
        

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