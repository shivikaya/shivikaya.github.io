
$(document).ready(function() {
  $(".aboutt").on("click", function() {

    

    $("html,body").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);

  });
  $(".homee").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);

  });
   $("#submit").on("click", function( e ) {

    e.preventDefault();

     alert("Site under construction. Kindly contact through email id or phone number provided. Thanks.");

  });
  $(".contactt").on("click", function() {

    

    $("html,body").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);

  });
 
  $(".portfolioo").on("click", function() {

    

    $("html,body").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);

  });
});
