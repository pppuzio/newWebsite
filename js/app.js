import '../scss/main.scss'
import Parallax from 'parallax-js';


//paralax setup

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);


//initial

    function preloader(){

        $( window ).on( "load", function(){
            $('.preloader').delay(1200).fadeOut();
            $('.loader').delay(800).fadeOut();
            scrollToTopOnReload();
            checkAndSetParallaxLayersHeight();
        });
    }

    preloader();

    function scrollToTopOnReload(){

        $( "html, body" ).animate({
            scrollTop: $(document)
        },800);
    }

    function disableLoadersInIE(){

        $('.loader').hide();
        $('.video-preloader').remove();
    }

//hamburger & main-menu

    function hamburgerToggler(){

        $(".hamburger-toggler").on('click', function(){

            $(this).find(".hamburger-toggler--wrapper").toggleClass('open');
            menuSlideToggle();
            menuItemsDelayedToggle();
            setDarkHamburgerOnLightBackground();
            changeSiteLogoValueOnMenuOpen();
            onClickMenuItems();
        })
    }
    hamburgerToggler();

    function menuSlideToggle() {

        let mainMenu = $('.main-menu');
        let hamburgerToggler = $('.hamburger-toggler--wrapper');

        if (hamburgerToggler.hasClass("open")){
            mainMenu.addClass('main-menu__open');
            mainMenu.removeClass('main-menu__closed');
        } else {
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

                if ( itemTitle === "contact"){
                    offsetCorrectionValue = -190;
                } else {
                    offsetCorrectionValue = 120;
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

        let hamburger = $('.hamburger-toggler--wrapper').find('div');
        hamburger.addClass('light-color-background');

        $(document).on('scroll', function(){
              if ($(document).scrollTop() >= $('#about').offset().top && !$('.main-menu').hasClass('main-menu__open')){
                  hamburger.addClass('dark-color-background');
                  hamburger.removeClass('light-color-background');
            } else if ($(document).scrollTop() < $('#about').offset().top){
                  hamburger.addClass('light-color-background');
                  hamburger.removeClass('dark-color-background');
            }
        })
    }
    changeHamburgerTogglerValueOnScroll();

    function setDarkHamburgerOnLightBackground(){

        let hamburger = $('.hamburger-toggler--wrapper').find('div');

        if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__open')){
            hamburger.addClass('light-color-background');
            hamburger.removeClass('dark-color-background');
        } else if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__closed')){
            hamburger.addClass('dark-color-background');
            hamburger.removeClass('light-color-background');
        }
    }

    function changeSiteLogoValueOnScroll(){

        let siteLogo = $('.site-logo');

        $(document).on('scroll', function(){
            if($(document).scrollTop() >= $('#about').offset().top && !$('.main-menu').hasClass('main-menu__open')){
                siteLogo.addClass('site-logo__black');
                siteLogo.removeClass('site-logo__white');
            }else {
                siteLogo.addClass('site-logo__white');
                siteLogo.removeClass('site-logo__black');
            }
        })
    }
    changeSiteLogoValueOnScroll();

    function changeSiteLogoValueOnMenuOpen(){

        let siteLogo = $('.site-logo');

        if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__open')){
            siteLogo.addClass('site-logo__white');
            siteLogo.removeClass('site-logo__black');
        } else if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__closed')){
            siteLogo.addClass('site-logo__black');
            siteLogo.removeClass('site-logo__white');
        }
    }

    function showHamburgerTogglerOnScroll(){

        let hamburger =  $('.hamburger-toggler');

        $(document).on('scroll', function(){
            if($(window).width() >= 900){
                if ($(document).scrollTop() >= $('#about').offset().top){
                    hamburger.css('display','block');
                }else {
                    hamburger.css('display','none');
                }
            }else {
                hamburger.css('display','block');
            }
        });
    }
    showHamburgerTogglerOnScroll();

    function showHamburgerTogglerOnResize(){

        let hamburger =  $('.hamburger-toggler');

        $(window).resize(function(){
            if ($(window).width() >= 900 && $(document).scrollTop() < $('#about').offset().top){
                hamburger.css('display','none');
            }else {
                hamburger.css('display','block');
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

    function detectIE(){

        let ua = window.navigator.userAgent;
        let is_ie = /MSIE|Trident/.test(ua);

        if ( is_ie ) {
            galleryToggleForIE();
            disableLoadersInIE();
        } else {
            galleryToggle();
        }
    }

    detectIE();

    function galleryToggle(){

        $('.gallery-menu--item-title').on('click', function(event){
            if(event.detail==1){

                $('.gallery-menu--item').removeClass('gallery-menu--item-title__active');
                $('.gallery-menu--item-close-button').removeClass('gallery-menu--item-close-button__visible');
                $('.gallery-menu--item-close-button').addClass('gallery-menu--item-close-button__hidden');
                hideGalleryItemDescription(300);
                hideWorkInfoButton();
                setVideo();

                $('.gallery').delay(300).slideUp(500);
                let menuItemId= $(this).parent().parent().attr('id');
                let selectedGallery = $(`#gallery-${menuItemId}`);

                selectedGallery.delay(500).slideDown(500, function(){
                    $('html,body').animate({
                            scrollTop: $(this).offset().top-30},
                        'slow');
                });
                $(this).parent().parent().addClass('gallery-menu--item-title__active');

                showCloseGalleryButton($(this));
                showGalleryItemDescription($(this),1200);
                closeGalleryItem();
                galleryDescriptionCloseButton($(this));

                setTimeout( function(){
                    checkAndSetParallaxLayersHeight();
                },1500);
            }
        });
    }

    function galleryToggleForIE(){

        $('.gallery-menu--item-title').on('click', function(){

            $('.gallery-menu--item').removeClass('gallery-menu--item-title__active');
            $('.gallery-menu--item-close-button').removeClass('gallery-menu--item-close-button__visible');
            $('.gallery-menu--item-close-button').addClass('gallery-menu--item-close-button__hidden');
            hideGalleryItemDescription(300);
            hideWorkInfoButton();
            setVideo();

            $('.gallery').delay(300).slideUp(500);
            let menuItemId= $(this).parent().parent().attr('id');
            let selectedGallery = $(`#gallery-${menuItemId}`);

            selectedGallery.delay(300).slideDown(500, function(){
                $('html,body').animate({
                        scrollTop: $(this).offset().top-30},
                    'slow');
            });

            $(this).parent().parent().addClass('gallery-menu--item-title__active');

            showCloseGalleryButton($(this));
            showGalleryItemDescription($(this),1200);
            closeGalleryItem();
            galleryDescriptionCloseButton($(this));

            setTimeout( function(){
                checkAndSetParallaxLayersHeight();
            },1500);
        });
    }



    function closeGalleryItem(){

        let closeButton = $('.gallery-menu--item-close-button');

        closeButton.on('click',function(){

            stopVideo(1000);
            hideGalleryItemDescription(300);
            hideWorkInfoButton();

            $(this).parent().siblings('.gallery').delay(400).slideUp('slow');

            $(this).addClass('gallery-menu--item-close-button__hidden');
            $(this).removeClass('gallery-menu--item-close-button__visible');

            let menuItemTitle = $(this).parent().parent();

            setTimeout(function() {
                menuItemTitle.removeClass('gallery-menu--item-title__active');
            }, 300);

            setTimeout( function(){
                checkAndSetParallaxLayersHeight();
            },1000);

            $('work-info--show-button').hide();

        })
    }

    function stopVideo(delay){

        setTimeout(function(){
            $('.youtube-player').attr('src','');
        },delay);
    }

    function setVideo(){

        $('.youtube-player').attr('src','https://www.youtube.com/embed/4uC3pYJJF0w');
    }

    function showCloseGalleryButton(closeButtonParent) {

        let closeButton = closeButtonParent.next();
        closeButton.addClass('gallery-menu--item-close-button__visible');
        closeButton.removeClass('gallery-menu--item-close-button__hidden');

    }

    function showGalleryItemDescription(galleryItem, delay){

        let galleryItemDescription = galleryItem.parent().siblings('.work-info--wrapper').find(".work-info");

        setTimeout(function(){
            galleryItemDescription.show();
            galleryItemDescription.removeClass("work-info__hidden");
            galleryItemDescription.addClass("work-info__visible");
        }, delay);

    }

    function hideGalleryItemDescription(delay){

        let galleryItemDescription = $(".work-info");

        galleryItemDescription.addClass("work-info__hidden");
        galleryItemDescription.removeClass("work-info__visible");

        setTimeout(function(){
            galleryItemDescription.hide();
        }, delay);
    }

    function defaultHideWorkInfo(){

        $(".work-info").hide();
    }
    defaultHideWorkInfo();

    function galleryDescriptionCloseButton(galleryItem){
        let closeButton = galleryItem.parent().parent().find('.work-info--close-button');

        closeButton.on('click', function(){
            hideGalleryItemDescription(500);

            setTimeout(function(){
                showWorkInfoButton(galleryItem);
            },500);

        })
    }

    function showWorkInfoButton(galleryItemDescription) {

        let workInfoButton = galleryItemDescription.parent().parent().find('.work-info--show-button');

        workInfoButton.show('500', function(){
            workInfoButton.removeClass("work-info--show-button__hidden");
            workInfoButton.addClass("work-info--show-button__visible");
        });

        onPressWorkInfoButton(workInfoButton);
    }

    function onPressWorkInfoButton(workInfoButton){

        workInfoButton.on("click", function(){

            let button = $(this);
            button.hide(300);
            button.removeClass("work-info--show-button__visible");
            button.addClass("work-info--show-button__hidden");

            let galleryItem = workInfoButton.siblings().find(".gallery-menu--item-title");
            showGalleryItemDescription(galleryItem, 100);
        })

    }

    function hideWorkInfoButton(){

        let showInfoButton = $(".work-info--show-button");

        setTimeout(function(){
            showInfoButton.removeClass("work-info--show-button__visible");
            showInfoButton.addClass("work-info--show-button__hidden");
            showInfoButton.hide(300);
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
                offsetCorrectionValue = 120;
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
        video: true,
        responsive:{
            0:{items:1},
        }
    });
});

function owlChangeVideoToggle(){

    $(".owl-carousel").on('translate.owl.carousel', function() {

        let videoPreloader =  $('.video-preloader');
        let videoLoader = $('.video-loader');

        setTimeout(function(){
            if ($('.youtube-player').parent().parent().hasClass("active")){
                setVideo();
                videoPreloader.delay(1200).fadeOut();
                videoLoader.delay(800).fadeOut();
            } else {
                stopVideo();
                videoPreloader.fadeIn();
                videoLoader.fadeIn();
            }
        },500);
    });
}

owlChangeVideoToggle();


