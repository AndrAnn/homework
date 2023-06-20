ymaps.ready(init);
$(function () {

    var mixer = mixitup('.blog__body');

    $('.blog__filters-btn').on('click', function () {
        $('.blog__filters-btn').removeClass('blog__filters-btn--active')
        $(this).addClass('blog__filters-btn--active')
    })

    $(".rateYo").rateYo({

        "rating": 4.5,
        "starSvg": "<svg width=\"30\" height=\"28\" viewBox=\"0 0 30 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">" +
            "<path d=\"M12.3662 1.82936C13.5032 -0.255461 16.4968 -0.255466 17.6338 1.82936L19.9256 6.03174C20.3571 6.82292 21.1214 7.37822 22.0072 7.5441L26.7121 8.42517C29.0463 8.86228 29.9713 11.7093 28.3399 13.4349L25.0514 16.9132C24.4323 17.5681 24.1404 18.4666 24.2563 19.3603L24.8723 24.1072C25.1779 26.4621 22.756 28.2217 20.6107 27.2034L16.2865 25.1507C15.4724 24.7642 14.5276 24.7642 13.7135 25.1507L9.38927 27.2034C7.24399 28.2217 4.82214 26.4621 5.12772 24.1072L5.74367 19.3603C5.85964 18.4666 5.5677 17.5681 4.94858 16.9132L1.66009 13.4349C0.0286615 11.7093 0.953722 8.86228 3.28786 8.42517L7.99278 7.5441C8.87858 7.37822 9.64288 6.82293 10.0744 6.03174L12.3662 1.82936Z\"/> </svg>",
        readOnly: true
    });

    $(".comments__slaider").slick({
        arrows: false,
        slidesToShow: 2,
        dots: true,
        infinite: true,
        appendDots: $('.comments__dots'),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.comments__previous').on('click', function (e) {
        e.preventDefault()
        $('.comments__slaider').slick('slickPrev')
    })
    $('.comments__next').on('click', function (e) {
        e.preventDefault()
        $('.comments__slaider').slick('slickNext')
    })

    /*$('.faq__item-link').on('click', function (e) {
        e.preventDefault()
       $(this).toggleClass('faq__item-link--active')
       $(this).children('.faq__answer').slideToggle()

    })*/

    $('.faq__item-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('faq__item-link--active')) {
            $(this).removeClass('faq__item-link--active')
            $(this).children('.faq__answer').slideUp()
        } else {
            $('.faq__item-link').removeClass('faq__item-link--active')
            $('.faq__answer').slideUp()
            $(this).addClass('faq__item-link--active')
            $(this).children('.faq__answer').slideDown()
        }
    })

    $(window).on('scroll', function (e) {
        if ($(window).scrollTop() > 0 && $('.header__nav').hasClass('header__nav--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    })

    $(window).on('resize', function (e) {
        if ($(window).width() > 900) {
            e.preventDefault()
            $('.overlay').removeClass('overlay--show')
            $('.burger').removeClass('burger--close')
            $('.header__nav').removeClass('header__nav--open')
        }
    })

    $(".header__nav a, .header__body a, .main a, .footer a").on("click", function (e) {
        if ($('.header__nav').hasClass('header__nav--open') === true) {
            $('.header__nav').removeClass('header__nav--open')
            $('.overlay').removeClass('overlay--show')
            $('.burger').removeClass('burger--close')
        }
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 900)
        e.preventDefault()
    })

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.overlay').toggleClass('overlay--show')
        $('.burger').toggleClass('burger--close')
        if ($('.burger').hasClass('burger--follow') === true) {
            $('.burger').removeClass('burger--follow')
        }
        else if ($('.burger').hasClass('burger--follow') === false && $(window).scrollTop() > 0) {
            $('.burger').addClass('burger--follow')
        }
        $('.header__nav').toggleClass('header__nav--open')
    })
});

function init() {
    var myMap = new ymaps.Map("map", {
        center: [37.769460, -122.468314],
        zoom: 12,
        controls: []
    });
    var myPlacemark = new ymaps.Placemark([37.769460, -122.468314]);
    myMap.geoObjects.add(myPlacemark);
}
