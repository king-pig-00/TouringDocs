(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-light').css('top', '0px');
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
            $('.sticky-top').removeClass('bg-transparent').css('top', '0px');
        } else {
            $('.sticky-top').addClass('bg-transparent').css('top', '-100px');
            $('.sticky-top').removeClass('bg-light').css('top', '-100px');
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
})(jQuery);
