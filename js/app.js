import '../scss/main.scss'
import Parallax from 'parallax-js';



$(function () {

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    function fullscreenSize(){
        console.log('skrypt działa');
        console.log($(window));
        $(window).resize(function(){
            $('.fullscreen-height').css('height',window.innerHeight+'px');
        })
    }
    fullscreenSize();

    function hamburgerToggler(){
        $(".hamburger-toggler--wrapper").click(function(){
            $(this).toggleClass('open');
            menuSlideToggle();
        })
    }
    hamburgerToggler();

    function menuSlideToggle(){

        var mainMenu = $('.main-menu');
        var hamburgerToggler = $('.hamburger-toggler--wrapper');

        console.log(mainMenu,hamburgerToggler);

        if (hamburgerToggler.hasClass("open")){
            mainMenu.css("top","0");
        }else {
            mainMenu.css('top','-100%');
        }

    }



});