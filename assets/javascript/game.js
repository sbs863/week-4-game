$(document).ready(function() {
	var char1Attack = 5;
	var char2Attack = 8;
	var char3Attack = 10;
	var char4Attack = 15;

    $("#char1").off('click').one("click", function() {

        $(".deepshadow2").html("Your Character");
        $(".deepshadow3").html("Select an Opponent");
        $(".one").html($(".char2"));
        $(".two").html($(".char3"));
        $(".three").html($(".char4"));

        $("#char2").off('click').one("click", function() {
            $(".deepshadow3").html("Defender");
            $(".defender").html($(".char2"));
            $('.attack').append($('<button>',{ 
            	text: "Attack",
            	click: function(){ 
            	
            		// debugger;
            		
               		var computerHealth = $('.tesk').attr("value") - char1Attack;
               		console.log(char1Attack);
               		console.log(computerHealth);
               		
               		var computerName = $('.tesk').attr("alt");
               		var playerHealth = $('.luth').attr("value") - char2Attack;
               		var playerName = $('.luth').attr("alt");
               		
               		$(".tesk").html(computerName + computerHealth); 
               		

               		$(".luth").html(playerName + playerHealth); 


               	
               	}
    		}));
		});

		$("#char3").off('click').one("click", function() { 
			$(".deepshadow3").html("Defender");
		    $(".defender").html($(".char3"));
		});      
        $("#char4").off('click').one("click", function() {
            $(".deepshadow3").html("Defender");
            $(".defender").html($(".char4"));

				});
    });


	$("#char2").off('click').one("click", function() {

	    $(".deepshadow2").html("Your Character");
	    $(".deepshadow3").html("Select an Opponent");
	    $(".one").html($(".char1"));
	    $(".two").html($(".char3"));
	    $(".three").html($(".char4"));

	    $("#char1").off('click').one("click", function() {
	        $(".deepshadow3").html("Defender");
	        $(".defender").html($(".char1"));

	        })

	    $("#char3").off('click').one("click", function() {
	        $(".deepshadow3").html("Defender");
	        $(".defender").html($(".char3"));

	    });

	    $("#char4").off('click').one("click", function() {
	        $(".deepshadow3").html("Defender");
	        $(".defender").html($(".char4"));


	    });

	});

	$("#char3").off('click').one("click", function() {

	    $(".deepshadow2").html("Your Character");
	    $(".deepshadow3").html("Select an Opponent");
	    $(".one").html($(".char1"));
	    $(".two").html($(".char2"));
	    $(".three").html($(".char4"));

	    $("#char1").off('click').one("click", function() {
	        $(".deepshadow3").html("Defender");
	        $(".defender").html($(".char1"));

	        })

	    $("#char2").off('click').one("click", function() {
	        $(".deepshadow3").html("Defender");
	        $(".defender").html($(".char2"));

	    });

	    $("#char4").off('click').one("click", function() {
	        $(".deepshadow3").html("Defender");
	        $(".defender").html($(".char4"));
   		});
	});

	$("#char4").off('click').one("click", function() {

	    $(".deepshadow2").html("Your Character");
	    $(".deepshadow3").html("Select an Opponent");
	    $(".one").html($(".char1"));
	    $(".two").html($(".char2"));
	    $(".three").html($(".char3"));

	    $("#char1").off('click').one("click", function() {
	        $(".deepshadow3").html("Defender");
	        $(".defender").html($(".char1"));

	        })

	    $("#char2").off('click').one("click", function() {
	        $(".deepshadow3").html("Defender");
	        $(".defender").html($(".char2"));

	    });

	    $("#char3").off('click').one("click", function() {
	        $(".deepshadow3").html("Defender");
	        $(".defender").html($(".char3"));


	    });

	});
});


