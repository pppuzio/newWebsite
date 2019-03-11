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
            console.log('jest');
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
                selectedGallery.delay(300).slideDown('slow');
                $(this).parent().parent().addClass('gallery-menu--item-title__active');

                console.log($(this));

                showCloseGalleryButton($(this));
                showGalleryItemDescription($(this),700);
                closeGalleryItem();
                galleryDescriptionCloseButton($(this));
            }

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
        let pageContentHeight = $('.mid-plane').outerHeight();

        $('.farest-plane').css('height',pageContentHeight);
        $(".far-mid-plane").css('height',pageContentHeight);
        $(".middle-close-plane").css('height',pageContentHeight);
        $(".closest-plane").css('height',pageContentHeight);

    }

    setParallaxLayersToContentHeight();

// owl carousel


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{items:1},
        }
    });
});



