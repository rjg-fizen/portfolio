$(function () {
    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        var nav = $('.top-nav');
        
        nav.removeClass('nav-scroll-stop');
        nav.addClass('nav-scroll-start');

        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function () {
            if (scrollPos >= 200)
                nav.addClass('white-color');
            else
                nav.removeClass('white-color');

            nav.removeClass('nav-scroll-start');
            nav.addClass('nav-scroll-stop')
        }, 800));

    })
});