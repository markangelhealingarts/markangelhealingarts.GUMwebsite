// JavaScript Document
// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Back Pain") {
         $("#feedback").css("color","red");
         $("#feedback").html("Back Pain and Pinched Nerves");
      }

      if ($(this).attr("id") == "Neck Pain") {
         $("#feedback").css("color","green");
         $("#feedback").html("Chronic Neck Pain");
      }

      if ($(this).attr("id") == "Chest Pain") {
         $("#feedback").css("color","blue");
         $("#feedback").html("Chest Pain and Cardiovascular Disease");
      }

      if ($(this).attr("id") == "Belly Fat") {
         $("#feedback").css("color","black");
         $("#feedback").html("Belly Fat and Obesity");
      }

  $("#feedback").css("backgroundColor","yellow");
$('#myModal').modal("show");
   });
}); //end main jQuery function
