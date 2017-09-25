$(document).ready(function() {
 

 	$("#stream1_btn").click(function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").click(function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").click(function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	
	/*	$("p").click(function() {
			$("p").css("color", "red");
			});*/
			
		$("h2").hover(function() {
			$("h2").css("background-color", "lightblue");
		});
		
		$("#fontsize1").hover(function() {
			$("#fontsize1").css("font-size", "3em");
		});
		
		$(".bottom_button").mouseover(function() {
			$("body").css("background-color", "black");
		});
		
		$(".bottom_button").mouseleave(function() {
			$("body").css("background-color", "grey");
		});
		
			
		/*$("#button1").click(function() {
			$("#button1").toggle(1000);
			});*/
			
		/*$("#button2").click(function() {
			$("#button2").slideToggle(1000);
		});*/
			
					
		/*$("#button3").mouseover(function() {
			$("#button3").slideToggle(1000, 0.5);
		});
		
		$("#button3").mouseleave(function() {
			$("#button3").slideToggle(1000, 1);
		});*/
		
		$("p").click(function() {
			$(this).children("a").css("background-color","yellow");	
	    });
	    
	    $("#button6").click(function() {
			$(this).prev("p").slideToggle("slow");	
	    });
	    
	    $("img").click(function() {
			$(this).next().next().slideDown();	
	    });
	    
	    $(".card").click(function(){
			$(this).toggleClass("highlight");	 
		});
		
		$("#select").click(function(){
			$(".card:not(.highlight)").hide();	 
		});

		$("#all").click(function(){
			$(".card").show();	 
		});
	    
	 

}); 
