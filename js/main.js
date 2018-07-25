// Main JS

(function($) {
    $(document).ready(function() {
        $('.image-slider').slick({
            lazyLoad: 'ondemand',
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000
        });

        $('.attire-slider').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        });

        $('[data-popup-target]').click(function (e) {
        	var popupTarget = $(this).data('popupTarget');
        	$('[data-popup=' + popupTarget + ']').fadeIn();
        	e.preventDefault();
        })

        $('.popup-close').click(function (e) {
        	$(this).parents('[data-popup]').fadeOut();
        	e.preventDefault();
        })

    });
})(jQuery);
