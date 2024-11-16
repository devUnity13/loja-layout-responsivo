function handleMenu() {
    if ($(window).width() <= 640) {
        $('#menu').hide();
        $('#menu-hamburger').off('click').on('click', function (e) {
            $('#menu').slideToggle();
        });

        $(document).off('click').on('click', function (e) {
            if (!$(e.target).closest('#menu-hamburger, #menu').length) {
                $('#menu').slideUp();
            }
        });
    } else {
        $('#menu').show();
        $(document).off('click');
        $('#menu-hamburger').off('click');
    }
}

handleMenu();

$(window).on('resize', function () {
    handleMenu();
});

$(document).ready(function () {

    $('header a').on('click', function (event) {

        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 600);
    });
});
