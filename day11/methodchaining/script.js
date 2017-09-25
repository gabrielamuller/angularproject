$(document).ready(function() {
  $("#button1").mouseenter(function() {
    $("#button1").removeClass("makeRed").addClass("makeBorder");
  }); 
 
  $("#button1").mouseleave(function() {
    $("#button1").addClass("makeRed").removeClass("makeBorder");
  });  
  
  $("#button1").click(function() {
    $("#para1").slideUp(1000).slideDown(1000);
  }); 
  
  $("#button2").click(function() {
    $("#para2").hide(1000).show(1000);
  }); 
  
  $("#button1").click(function() {
    $("#para1").fadeIn(1000).fadeOut(1000);
  }); 
}); 