$(document).ready(function() {

    $("#slideOne").show();
    
    $("#one").click(function (){
        $(".page").hide();
        $("#slideOne").show();
    });
    $("#two").click(function (){
        $(".page").hide();
        $("#slideTwo").show();
    });
    $("#three").click(function (){
        $(".page").hide();
        $("#slideThree").show();
    });
    $("#four").click(function (){
        $(".page").hide();
        $("#slideFour").show();
    });
    $("#five").click(function (){
        $(".page").hide();
        $("#slideFive").show();
    });
   
    
    $("#leftButton").click(function (){
      
        var i = $(".page:visible").index();
        
        if (i < 1) {
            $(".page:visible").hide();
            $(".page:last").show();        
        } else {
            $(".page:visible").hide().prev(".page").show();
        };
        
    });    
    
    $("#rightButton").click(function (){
        // find out what slide is visible
        // go to slide + 1
        // if we are at the end, go to slide 0
        var i = $(".page:visible").index();
        var len = $(".page").length - 1;
        
        if (i < len) {
                    $(".page:visible").hide().next(".page").show();
        } else {
            $(".page:visible").hide();
            $(".page:first").show();
        };

  });

});

