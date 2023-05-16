$(document).keydown(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});

})