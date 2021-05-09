$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        rewind: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })

    AOS.init();

});
