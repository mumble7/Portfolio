$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    $(".card").hover(
        function () {
            $(this).addClass('shadow-lg').css('cursor', 'pointer');
        },
        function () {
            $(this).removeClass('shadow-lg');
        }
    );

    // JumboTron
    $(".jumbotron").css({
        height: $(window).height() + "px"
    });

    $(window).on("resize", function () {
        $(".jumbotron").css({
            height: $(window).height() + "px"
        });
    });

    // Carousel
    $('.carousel').carousel()

    // document ready  
});