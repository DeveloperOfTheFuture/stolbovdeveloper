$(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        responsive: {
            320: {
                items: 1,
                nav: false,
                dots: true
            },
            768: {
                items: 2,
                nav: false,
                dots: true,
                margin: 35
            },
            1170: {
                items: 3,
                nav: true,
                dots: false,
                margin: 30
            }
        }
    });

    $(".header__hum").click(function(){
        $(".mobile-menu").toggle();
    });

    $(".offer__img").addClass('active');

    $(".offer__btn").click(function(){
        $(".wrap").css("display", "block");
        $("body").css("overflow-y", "hidden");
    });

    $(".modal-form__btn").click(function(){
        $(".wrap").css("display", "none");
        $("body").css("overflow-y", "auto");
    });
  });
