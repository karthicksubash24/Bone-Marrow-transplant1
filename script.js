     var firstj = jQuery.noConflict();
firstj(document).ready(function () {
    var owl = firstj('.testimonials');
    owl.owlCarousel({
        items: 1,
        margin:60,
        autoplay: true,
        autoPlay: 4000, //Set AutoPlay to 3 seconds
        dots: false,
        nav:false,
        alphaSpeed: 450,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        loop: true,
        responsive: {
            300: {
                items: 1,
            },
            320: {
                items: 1,
            },
            480: {
                items: 1,
            },
            720: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    });
});


