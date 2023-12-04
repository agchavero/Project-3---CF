//resource link: https://www.w3schools.com/jquery/default.asp

$("#home-screen").hide();
$("#cfinfo").hide();
$("#percentage").hide();
$("#website").hide();

$("#breatheez").click(function(){

    $("#welcomescreen").hide();
    $("#home-screen").show();
    
});

$("#CFAwareness").click(function(){

    $("#welcomescreen").show();
    $("#home-screen").hide();
    
});


$("#what").click(function(){

    $("#what").toggleClass("animate-slide");
    
    $("#cfinfo").delay(100).slideToggle(400);
    // //slideUp, slideDown, slideToggle//
 
});

$("#how").click(function(){

    $("#how").toggleClass("animate-slide");

    $("#percentage").delay(100).slideToggle(400);

});

$("#calltoaction").click(function(){

    $("#calltoaction").toggleClass("animate-slide");

    $("#website").delay(100).slideToggle(400);

});





