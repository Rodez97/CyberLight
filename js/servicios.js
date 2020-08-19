// Heredado
!function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:a.offset().top-70},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:100});function a(){100<e("#mainNav").offset().top?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")}a(),e(window).scroll(a)}(jQuery);

// Contact Form Code
function enviarMail() {
    var link = "mailto:cyberlightgamedev@gmail.com"
             + "?cc=" + document.getElementById("emailForm").value
             + "&subject=" + document.getElementById("subForm").value
             + "&body=" + document.getElementById('messageForm').value
    ;
    window.location.href = link;
}
// Cargar Servicios
function cargarTodo() {
	cargarFacebook();
}

function cargarFacebook() {
	window.fbAsyncInit = function () {
    FB.init({
    xfbml: true,
    version: 'v4.0'
    });
    };

    (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

