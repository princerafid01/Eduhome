$(document).ready(function () {
    $('a.search').click(function () {
        $('header ul.navigation li.search-bar input').toggleClass('opacity');
    });
    $('.sliders').owlCarousel({
        items: 1,
        navigation: true,
        //autoplay: true,
        animateOut: 'lightSpeedOut',
        animateIn: 'fadeInDown',
        smartSpeed: 100,
        loop: true,
        pullDrag: false,
        mouseDrag: false,
        dots: true,
    });
    $('.courses-slider').owlCarousel({
        items: 1,
        navigation: true,
        //autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 100,
        loop: true,
        pullDrag: false,
        mouseDrag: false,
        dots: true,

    });
    $('.teacher .row').owlCarousel({
        nav: true,
        //autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        pullDrag: false,
        mouseDrag: false,
        dots: false,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 4,
                nav: true
            }
        }
    });
    $('.feedback .row').owlCarousel({
        items: 2,
        navigation: true,
        //autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        pullDrag: false,
        mouseDrag: false,
        dots: true,
    });

    // Counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Log in
    $('a.login-popup').click(function () {
        $('.login').addClass('opacity');
        $('body').addClass('overflow');
    });
    $('.login span').click(function () {
        $('.login').removeClass('opacity');
        $('body').removeClass('overflow');
    });

    //Video popup
    $('.video-play-icon').magnificPopup({
        type: 'video'
    });


    //Menu
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('ul.navigation').addClass("sticky");
        } else {
            $('ul.navigation').removeClass("sticky");
        }
    });
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function () {
            window.location.hash = target;
        });
    });



    // Active menu link
    $('ul.navigation li a').click(function () {
        $('a').removeClass('a-active');
        $(this).addClass('a-active');
        $('a.home-link').removeClass('a-active');
    });

    $('.responsive-menu').slicknav();
    
    // WoW active
    new WOW().init();
});