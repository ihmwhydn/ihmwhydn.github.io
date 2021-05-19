$(document).ready(function(){

    $('#design').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
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

    $('#brand').owlCarousel({
        center: true,
        loop:true,
        margin:10,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
        }
    })

});
