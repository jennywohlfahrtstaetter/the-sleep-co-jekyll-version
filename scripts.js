$( document ).ready(function() {
    console.log( "ready" );

    $(".hamburger-button").click(function(){

        $(this).toggleClass('active');
        $('.mob-menu').slideToggle();
    });

    // activate animate on scroll
    AOS.init();


});


lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});

lightGallery(document.getElementById('lightgallery-2'), {
    speed: 500,
    download: false
});