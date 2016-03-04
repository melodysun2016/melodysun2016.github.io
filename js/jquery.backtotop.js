(function($) {
    $.fn.backToTop = function() {
        var selectz = $(this);
        selectz.hide();
        $(window).scroll(function() {
            if (($(this).scrollTop()+52) > $(window).height()) {
                selectz.fadeIn();
            } else {
                selectz.fadeOut();
            }
        });
    };
}(jQuery));
