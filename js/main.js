$(document).ready(function() {

    $(window).on("resize", function(e) {
        if ($(window).width() <= 768) {
            $('.quote-btn').html("QUOTE");
            $('.navbar-item:first-child .navbar-link').addClass('dropdown-toggle');
            $('#phone').addClass('d-none');
        } else {
            $('.quote-btn').html("GET A QUOTE");
            $('#phone').removeClass('d-none');
        }
    }).trigger('resize');



});