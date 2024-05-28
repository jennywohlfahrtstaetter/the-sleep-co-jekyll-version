$( document ).ready(function() {
    console.log( "ready" );

    $(".hamburger-button").click(function(){

        $(this).toggleClass('active');
        $('.mob-menu').slideToggle();
    });

    // activate animate on scroll
    AOS.init();


});
