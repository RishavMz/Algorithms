$("#button1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top	
    }, 1000);
});
$("#button2").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top	
    }, 1000);
});
$("#button3").click(function() {
    $('html, body').animate({
        scrollTop: $("#achievements").offset().top	
    }, 1000);
});