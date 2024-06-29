$(document).ready(function() {
    if ($(window).width() >= 1024) {
        $(".carousel").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: true
        });

        // Add a gap between carousel elements
        $(".carousel").find(".slick-slide").css("margin-right", "10px");
    }
});