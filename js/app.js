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



});