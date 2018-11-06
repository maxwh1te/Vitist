jQuery(document).ready(function ($) {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    const headNav = $('.menuCatalog .headNav');
    const dropMenu = $('.menuCatalog .dropMenu');
    const navNext = $('.arrow-nav .nav-next')
    const burgerMenu = $('.burgerMenu')

    headNav.on('mouseover', function () {
        $(this).children().next().addClass('active')

        dropMenu.not($(this).children().next()).removeClass('active')
    })

    dropMenu.on('mouseout', function () {
        $(this).removeClass('active')
    })


    
    navNext.on('click', function () {
        $('.owl-carousel').find('.owl-nav').children().next().addClass('active')
    })


    burgerMenu.on('click', function () {
        console.log('yes')
        $('.popUpMenu').addClass('active')
        $('body,html').animate({scrollTop:0}, 300);
        $('.headerTop').fadeOut(500)
    })

    $('.closeIcon').on('click', function () {
        $('.popUpMenu').removeClass('active')
        $('.headerTop').fadeIn(500)
    })

    $( ".owl-prev").children().html('');
    $( ".owl-next").children().html('');


});