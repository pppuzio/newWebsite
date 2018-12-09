import '../scss/main.scss'
import Parallax from 'parallax-js';



$(function () {

    //paralax setup
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);


    //resizing to fullscreen

    function fullscreenSize(){
        $(window).resize(function(){
            $('.fullscreen-height').css('height',window.innerHeight+'px');
        })
    }
    fullscreenSize();

    //hamburger & main-menu

/*    function hamburgerToggler(){
        $(".hamburger-toggler--wrapper").vclick(function(){
            $(this).toggleClass('open');
            menuSlideToggle();
            menuItemsDelayedToggle();
            setDarkHamburgerOnLightBackground();
            changeSiteLogoValueOnMenuOpen();
        })
    }
    hamburgerToggler();*/

    function hamburgerToggler(){
        $(".hamburger-toggler--wrapper").on('vclick', function(){
            $(this).toggleClass('open');
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
            /*mainMenu.css('transition-delay','0');*/
            mainMenu.find('li').css('opacity', '1');

        } else {
           /* mainMenu.css('transition-delay','.5s');*/
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
                $('.site-logo').css('background-image','url("../images/pp-logo-black.png');
            }else {
                $('.site-logo').css('background-image','url("../images/pp-logo-white.png")');
            }
        })
    }
    changeSiteLogoValueOnScroll();

    function changeSiteLogoValueOnMenuOpen(){
        if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__open')){
            $('.site-logo').css('background-image','url("../images/pp-logo-white.png');
        } else if ($(document).scrollTop() >= $('#about').offset().top && $('.main-menu').hasClass('main-menu__closed')){
            $('.site-logo').css('background-image','url("../images/pp-logo-black.png');
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
});