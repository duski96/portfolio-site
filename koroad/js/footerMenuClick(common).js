$(document).ready(function(){
    $(".quick_site > div").click(function(){
        if($(this).children("ul").is(":visible")){
            $(this).children("ul").css({"display":"none"});
        }
        else{
            $(".quick_site > div").children("ul").css({"display":"none"});
            $(this).children("ul").css({"display":"inherit"});
        }
    });

    $('html').click(function(e) { 
        if(!$(e.target).is(".exam_venue p, .tbn p, .camp p, .relevant_org p")) { 
            $(".quick_site > div").children("ul").css({"display":"none"});
        } 
    });
});