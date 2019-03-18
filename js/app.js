import '../scss/main.scss'
import Parallax from 'parallax-js';






    //paralax setup TODO: opakuj w document ready
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);


    //resizing to fullscreen

/*    function fullscreenSize(){
        $(window).resize(function(){
            $('.fullscreen-height').css('height',window.innerHeight+'px');
        })
    }
    fullscreenSize();*/


    //initial

    function preloader(){
        $( window ).on( "load", function(){
            $('.preloader').fadeOut();
        });
    }

    preloader();

    function scrollToTopOnReload(){

        $( "html, body" ).animate({
            scrollTop: $(document)
        },800);
    }

    scrollToTopOnReload();

    //hamburger & main-menu

    function hamburgerToggler(){
        $(".hamburger-toggler").on('click', function(){

            console.log('klikam');
            console.log($(this).find(".hamburger-toggler--wrapper"));
            $(this).find(".hamburger-toggler--wrapper").toggleClass('open');
            menuSlideToggle();
            menuItemsDelayedToggle();
            setDarkHamburgerOnLightBackground();
            changeSiteLogoValueOnMenuOpen();
            onClickMenuItems();
        })
    }
    hamburgerToggler();

    function menuSlideToggle(){

        let mainMenu = $('.main-menu');
        let hamburgerToggler = $('.hamburger-toggler--wrapper');

        if (hamburgerToggler.hasClass("open")){
            mainMenu.addClass('main-menu__open');
            mainMenu.removeClass('main-menu__closed');
        }else {
            mainMenu.addClass('main-menu__closed');
            mainMenu.removeClass('main-menu__open');
        }
    }

    function menuItemsDelayedToggle() {

        let mainMenu = $('.main-menu');
        let hamburgerToggler = $('.hamburger-toggler--wrapper');

        if (hamburgerToggler.hasClass("open")) {

            mainMenu.find('li').css('opacity', '1');

        } else {

            mainMenu.find('li').css('opacity', '0');
        }
    }

    function onClickMenuItems(){

            $('.vertical-menu--item').on('click', function(){

                $(".hamburger-toggler--wrapper").removeClass('open');

                let item = $(this);
                let itemTitle = item.children().text().toLowerCase();
                let offsetCorrectionValue = 0;

                if (itemTitle === "curriculum vitae"){
                    itemTitle = "cv";
                }
                let selectedSection = $(`#${itemTitle}`);
                console.log(itemTitle);

                if ( itemTitle === "contact"){
                    offsetCorrectionValue = -190;
                } else {
                    offsetCorrectionValue = 80;
                }

                $('html,body').stop(true, false).animate({
                        scrollTop: selectedSection.offset().top + offsetCorrectionValue},
                    'slow');

                let mainMenu = $('.main-menu');
                mainMenu.addClass('main-menu__closed');
                mainMenu.removeClass('main-menu__open');



            })
    }

    function changeHamburgerTogglerValueOnScroll(){

        $('.hamburger-toggler--wrapper').find('div').addClass('light-color-background');
        // $('.main-menu').hasClass('.main-menu__opened')
        $(document).on('scroll', function(){
              if ($(document).scrollTop() >= $('#about').offset().top && !$('.main-menu').hasClass('main-menu__open')){
                $('.hamburger-toggler--wrapper').find('div').addClass('dark-color-background');
                $('.hamburger-toggler--wrapper').find('div').removeClass('light-color-background');
            } else if ($(document).scrollTop() < $('#about').offset().top){
                $('.hamburger-toggler--wrapper').find('div').addClass('light-color-background');
                $('.hamburger-toggler--wrapper').find('div').removeClass('dark-color-background');
            }
        })
    }
    changeHamburgerTogglerValueOnScroll();


    function setDarkHamburgerOnLightBackground(){
        if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__open')){
            $('.hamburger-toggler--wrapper').find('div').addClass('light-color-background');
            $('.hamburger-toggler--wrapper').find('div').removeClass('dark-color-background');
        } else if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__closed')){
            $('.hamburger-toggler--wrapper').find('div').addClass('dark-color-background');
            $('.hamburger-toggler--wrapper').find('div').removeClass('light-color-background');
        }

    }

    function changeSiteLogoValueOnScroll(){

        $(document).on('scroll', function(){
            if($(document).scrollTop() >= $('#about').offset().top && !$('.main-menu').hasClass('main-menu__open')){
                $('.site-logo').css('background-image','url("images/pp-logo-black.png');
            }else {
                $('.site-logo').css('background-image','url("images/pp-logo-white.png")');
            }
        })
    }
    changeSiteLogoValueOnScroll();

    function changeSiteLogoValueOnMenuOpen(){
        if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__open')){
            $('.site-logo').css('background-image','url("images/pp-logo-white.png');
        } else if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__closed')){
            $('.site-logo').css('background-image','url("images/pp-logo-black.png');
        }
    }

    function showHamburgerTogglerOnScroll(){
        $(document).on('scroll', function(){
            if($(window).width() >= 900){
                if ($(document).scrollTop() >= $('#about').offset().top){
                    console.log('show');
                    $('.hamburger-toggler').css('display','block');
                }else {
                    $('.hamburger-toggler').css('display','none');
                }
            }else {
                $('.hamburger-toggler').css('display','block');
            }
        });
    }
    showHamburgerTogglerOnScroll();

    function showHamburgerTogglerOnResize(){
        $(window).resize(function(){
            if ($(window).width() >= 900 && $(document).scrollTop() < $('#about').offset().top){
                $('.hamburger-toggler').css('display','none');
            }else {
                $('.hamburger-toggler').css('display','block');
            }
        });
    }
    showHamburgerTogglerOnResize();

    let hamburgerWrapper= $('.hamburger-toggler--wrapper');

    function hoverChangeToMediumColor(element){

        element.hover(function(){
            $(this).find('div').toggleClass('medium-color-background');
        })
    }
    hoverChangeToMediumColor(hamburgerWrapper);

    //galllery

    function galleryToggle(){

        $('.gallery-menu--item-title').on('click', function(event){
            if(event.detail==1){

                $('.gallery-menu--item').removeClass('gallery-menu--item-title__active');
                $('.gallery-menu--item-close-button').removeClass('gallery-menu--item-close-button__visible');
                $('.gallery-menu--item-close-button').addClass('gallery-menu--item-close-button__hidden');
                hideGalleryItemDescription();
                hideWorkInfoButton();

                $('.gallery').slideUp();
                let menuItemId= $(this).parent().parent().attr('id');

                let selectedGallery = $(`#gallery-${menuItemId}`);


                $('html,body').delay(50).animate({
                        scrollTop: $(this).offset().top},
                    'slow');
                selectedGallery.slideDown(1000);
                $(this).parent().parent().addClass('gallery-menu--item-title__active');

                console.log($(this));

                showCloseGalleryButton($(this));
                showGalleryItemDescription($(this),700);
                closeGalleryItem();
                galleryDescriptionCloseButton($(this));

                setTimeout( function(){
                    checkAndSetParallaxLayersHeight();
                },1000);

            }
                //TODO: add fix for IE!!!
        });
    }

    galleryToggle();

    function closeGalleryItem(){

        let closeButton = $('.gallery-menu--item-close-button');

        closeButton.on('click',function(){

            console.log('click na X!');
            console.log($(this).parent().siblings());

            /*let gallery =  $(this).parent().siblings('.gallery');*/

            hideGalleryItemDescription();
            hideWorkInfoButton();

            $(this).parent().siblings('.gallery').delay(400).slideUp('slow');

            $(this).addClass('gallery-menu--item-close-button__hidden');
            $(this).removeClass('gallery-menu--item-close-button__visible');



            /*$(this).parent().parent().removeClass('gallery-menu--item-title__active');*/
            let menuItemTitle = $(this).parent().parent();

            setTimeout(function() {
                /*gallery.slideUp();*/
                menuItemTitle.removeClass('gallery-menu--item-title__active');
            }, 300);

            setTimeout( function(){
                checkAndSetParallaxLayersHeight();
            },1000);

        })
    }



    function showCloseGalleryButton(closeButtonParent) {


        /*let closeButton = $('.gallery-menu--item-close-button');*/
        let closeButton = closeButtonParent.next();


        closeButton.addClass('gallery-menu--item-close-button__visible');
        closeButton.removeClass('gallery-menu--item-close-button__hidden');

    }

    function showGalleryItemDescription(galleryItem, delay){

        let galleryItemDescription = galleryItem.parent().siblings('.work-info--wrapper').find(".work-info");

        setTimeout(function(){
            console.log("infoworkDescription");
            galleryItemDescription.show();
            galleryItemDescription.removeClass("work-info__hidden");
            galleryItemDescription.addClass("work-info__visible");
            /*galleryItemDescription.fadeIn('slow');*/

        }, delay);

    }

    function hideGalleryItemDescription(){

        let galleryItemDescription = $(".work-info");

        setTimeout(function(){

        },500);

        galleryItemDescription.addClass("work-info__hidden");
        galleryItemDescription.removeClass("work-info__visible");

        setTimeout(function(){
            galleryItemDescription.hide();
        }, 700);

    }

    function defaultHideWorkInfo(){
        let galleryItemDescription = $(".work-info");
        galleryItemDescription.hide();
    }
    defaultHideWorkInfo();

/*    function defaultHideWorkInfoButton(){
        let workInfoButton = $('.work-info--show-button');
        workInfoButton.hide();
    }
    defaultHideWorkInfoButton();*/

    function galleryDescriptionCloseButton(galleryItem){
        let closeButton = galleryItem.parent().parent().find('.work-info--close-button');

        console.log(closeButton);
        closeButton.on('click', function(){
            console.log("gallery desrpt close");
            hideGalleryItemDescription();
            showWorkInfoButton(galleryItem);
        })
    }

    function showWorkInfoButton(galleryItemDescription) {

        let workInfoButton = galleryItemDescription.parent().parent().find('.work-info--show-button');

        setTimeout(function(){

            workInfoButton.removeClass("work-info--show-button__hidden");
            workInfoButton.addClass("work-info--show-button__visible");
        }, 300);

        onPressWorkInfoButton(workInfoButton);
    }

    function onPressWorkInfoButton(workInfoButton){

        workInfoButton.on("click", function(){

            setTimeout(function(){
                workInfoButton.removeClass("work-info--show-button__visible");
                workInfoButton.addClass("work-info--show-button__hidden");

            },100);





            let galleryItem = workInfoButton.siblings().find(".gallery-menu--item-title");
            showGalleryItemDescription(galleryItem, 100);
        })

    }

    function hideWorkInfoButton(){
        setTimeout(function(){
            $(".work-info--show-button").removeClass("work-info--show-button__visible");
            $(".work-info--show-button").addClass("work-info--show-button__hidden");

        },100);
    }

// textbox scroll buttons

    function scrollTextBox(){

        let scrollValue= 300;

        $(".up").click(function(){

            $(".info-text").animate({
                scrollTop: ($('.info-text').scrollTop()-scrollValue),
            },'fast');

            $('.up').addClass('arrow__clicked');

            setTimeout(function(){
                $('.up').removeClass('arrow__clicked');
            }, 500);

        });

        $(".down").click(function(){

            $(".info-text").animate({
                scrollTop: ($('.info-text').scrollTop()+scrollValue),
            },'fast');

            $('.down').addClass('arrow__clicked');

            setTimeout(function(){
                $('.down').removeClass('arrow__clicked');
            }, 200);

        });
    }

    scrollTextBox();

//parallax layers height fix


    function setParallaxLayersToContentHeight(){

        checkAndSetParallaxLayersHeight();

        $(window).on('resize', function(){

            checkAndSetParallaxLayersHeight();
        });


        $( window ).on( "orientationchange", function() {

            checkAndSetParallaxLayersHeight();
        });
    }

    setParallaxLayersToContentHeight();

    function checkAndSetParallaxLayersHeight(){

        let pageContentHeight = $('.mid-plane').outerHeight();

        $('.farest-plane').height(pageContentHeight);
        $(".far-mid-plane").height(pageContentHeight);
        $(".middle-close-plane").height(pageContentHeight);
        $(".closest-plane").height(pageContentHeight);
    }

// navbar

    function onPressNavbarItem(){

        let navbarMenuItems = $('.horizontal-menu--item');

        let offsetCorrectionValue = 0;

        navbarMenuItems.on('click', function(){
            let item = $(this);
            let itemTitle = item.children().children().text();
            let selectedSection = $(`#${itemTitle}`);

            if ( itemTitle === "contact"){
                offsetCorrectionValue = -190;
            } else {
                offsetCorrectionValue = 80;
            }

            $('html,body').animate({
                    scrollTop: selectedSection.offset().top + offsetCorrectionValue},
                'slow');
        })
    }

    onPressNavbarItem();

    function onPressLogo(){

        $('.site-logo').on("click", function(){
            $('html,body').delay(50).animate({
                    scrollTop:  $('html,body').offset().top},
                'slow');

            let mainMenu = $('.main-menu');
            mainMenu.addClass('main-menu__closed');
            mainMenu.removeClass('main-menu__open');

            $(".hamburger-toggler--wrapper").removeClass('open');
        })


    }

    onPressLogo();

    function onPressScrollArrow(){
        $('.scroll-arrow').on("click", function(){
            $('html,body').delay(50).animate({
                    scrollTop:  $('#about').offset().top+80},
                'slow');
        })
    }

    onPressScrollArrow();

// secure e-mail address

    function changeFalseEmailToCorrect(){

        $('a.mail').on('click', function(){
            let href = $(this).attr('href');
            $(this).attr('href', href.replace('falsemail.', ''));
        });
    }

    changeFalseEmailToCorrect();
// owl carousel


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        lazyLoad: true,
        margin:10,
        responsive:{
            0:{items:1},
        }
    });
});



