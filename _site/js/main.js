// Main JS

(function($) {
    $(document).ready(function() {
        $('.image-slider').slick({
            lazyLoad: 'ondemand',
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000
        });

        $('.attire-slider').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        });

    });
})(jQuery);
