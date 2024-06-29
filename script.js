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

        // Handle hover event on carousel divs
        $(".carousel").on("mouseenter", ".slick-slide", function() {
            // Make all other carousel divs more transparent with smooth animation
            $(this).siblings().css("opacity", "0.3").css("transition", "opacity 0.3s");
        }).on("mouseleave", ".slick-slide", function() {
            // Restore opacity of all carousel divs on mouse leave
            $(this).siblings().css("opacity", "1").css("transition", "opacity 0.3s");
        });
    }
});