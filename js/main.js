$(function(){
    tabInit();
    sliderInit();
    menuOpen();
});

function tabInit() {
    $(".tabs").tabs();
}

function sliderInit() {
    $('.slick-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    });
}
function menuOpen() {
    $('.js-menu-opener').on('click', function(){
        if($('#header').hasClass('active')) {
            $('#header').removeClass('active');
        } else {
            $('#header').addClass('active');
        }
    });
}