$(document).ready(function(){

    var swiper1 = new Swiper(".mySwiper-1", {
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination-1",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
      });

      var swiper2 = new Swiper(".mySwiper-2", {
        loop: true,
        freeMode: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 7,
          }
        },
      });

    new WOW().init();

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

      $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
      });

      $('#modal6').modal('show')

});
