$(window).resize(function() {
    var width = $(window).width();

    if(width >= 768) {
        var swiper2 = new Swiper('.swiper-s02', {
            slidesPerView: 2,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }