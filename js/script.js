$(document).ready(function(){

    $('#design').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayHoverPause: true,
        rewind:true,
        responsive:{
            0:{
                items:1,
                autoplay:false
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1400:{
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

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 54){
          $(".navbar").removeClass('shadow-none').addClass('shadow-sm');
        } else{
          $(".navbar").removeClass('shadow-sm').addClass('shadow-none');
        }
      })

      $('.navbar-toggler').click(function(){
        $('.navbar').toggleClass('shadow-custom');
      });

});
