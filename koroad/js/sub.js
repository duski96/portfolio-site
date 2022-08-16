$(document).ready(function(){

/**************************** bxSlider (공지사항) *************************************/
    var slider1=$('.slider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: false,
        pager: true,
        controls: false,
    });

    var slider2=$('.mobile_slider').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: false,
        pager: false,
        controls: false,
    });

    $(window).on("resize",function(){

        var wReSize=$(window).width();
        
        if(wReSize > 768){
            slider1.reloadSlider();
        }
        else{
            slider2.reloadSlider();
        }
    });
    

/************************************ subPage 메인 메뉴(quickMenu) 클릭 *****************************************/
    var imgPath;
    var corrPath
    var exMenuId;
    var exImgPath;
    var orderValue; // 몇번째 메뉴를 클릭했는지 확인

    var wSize=$(window).width();

    $.fn.extend({
        quickMenuClick: function(){
            $(this).addClass("current");
            $(this).children("img:first-of-type").attr("src", corrPath);//이미지 경로 변경
            $(this).children("h2, p, span, img:nth-of-type(2)").addClass("current");

            //화면 크기별 blue_border_box 배경
            if(wSize > 1024){
                if(orderValue=="1" || orderValue=="2" || orderValue=="3"){
                    $(this).addClass("current_bg_1");
                }
                else{
                    $(this).addClass("current_bg_2");
                }
            }
            else{
                $(this).addClass("current_bg_1");
            }
            
            //이전에 클릭한 메뉴를 변수에 저장
            exMenuId = $(this).attr("id");
            exImgPath = $(this).children("img:first-of-type").attr("src");
            exImgPath = exImgPath.replace(".png", "w.png");//파일 이름 변경

            //black label menu
            $(".quick_menu .qmc_list").css({"display":"none"});
            $("#q"+orderValue).css({"display":"flex"});
        }
    });

    $(".quick_menu .qmc").click(function(){

        imgPath = $(this).children("img:first-of-type").attr("src");
        corrPath = imgPath.replace("w", "");
        orderValue = $(this).attr("id").replace("m", "");
        
        //화면 크기별 main content 관련 위치 및 사이즈
        if(wSize > 1024){
            $("#m3").parent().after($(".qmc_list"));
            $(".qmc_list").css("height","400px");
            $("main").css("height","1000px");
            $(".black_bg").css({"height":"380px","top":"310px"});
        }
        else if(wSize <= 1024  && wSize > 768){
            if(orderValue=="1" || orderValue=="2" || orderValue=="3"){
                $("#m3").parent().after($(".qmc_list"));
                if(orderValue=="1"){
                    $(".black_bg").css({"top":"310px","height":"395px"});
                    $(".qmc_list").css("height","400px");
                    $("main").css("height","980px");
                }
                else{
                    $(".black_bg").css({"top":"310px","height":"595px"});
                    $(".qmc_list").css("height","600px");
                    $("main").css("height","1180px");
                }
            }
            else{
                $("#m6").parent().after($(".qmc_list"));
                $(".black_bg").css({
                    "top":"570px",
                    "height":"195px"
                });
                $(".qmc_list").css("height","200px");
                $("main").css("height","785px");
            }
        }
        else if(wSize <= 768  && wSize > 480){
            if(orderValue=="1" || orderValue=="2"){
                $("#m2").parent().after($(".qmc_list"));

                if(orderValue=="1"){
                    $(".black_bg").css({"top":"310px","height":"395px"});
                    $(".qmc_list").css("height","400px");
                    $("main").css("height","1250px");
                }
                else{
                    $(".black_bg").css({"top":"310px","height":"595px"});
                    $(".qmc_list").css("height","600px");
                    $("main").css("height","1450px");
                }
            }
            else if(orderValue=="3" || orderValue=="4"){
                $("#m4").parent().after($(".qmc_list"));
                if(orderValue=="3"){
                    $(".black_bg").css({"top":"570px","height":"595px"});
                    $(".qmc_list").css("height","600px");
                    $("main").css("height","1450px");
                }
                else{
                    $(".black_bg").css({"top":"570px","height":"195px"});
                    $(".qmc_list").css("height","200px");
                    $("main").css("height","1080px");
                }
            }
            else{
                $("#m6").parent().after($(".qmc_list"));
                $(".black_bg").css({"top":"830px","height":"195px"});
                $(".qmc_list").css("height","200px");
                $("main").css("height","1080px");
            }
        }
        else{
            $("#m"+orderValue).parent().after($(".qmc_list"));
            if(orderValue=="1"){
                $(".black_bg").css({"top":"310px","height":"380px"});
                $(".qmc_list").css("height","400px");
                $("main").css("height","2020px");
            }
            else if(orderValue=="2" || orderValue=="3"){
                if(orderValue=="2"){
                    $(".black_bg").css("top","570px");
                }
                else{
                    $(".black_bg").css("top","830px");
                }
                $(".black_bg").css("height","480px");
                $(".qmc_list").css("height","500px");
                $("main").css("height","2100px");
            }
            else{
                $("main").css("height","1920px");
                $(".qmc_list").css("height","300px");

                if(orderValue=="4"){
                    $(".black_bg").css({"height":"280px","top":"1090px"});
                    
                }
                else if(orderValue=="5"){
                    $(".black_bg").css({"height":"180px","top":"1350px"});
                    $(".qmc_list").css("height","200px");
                    $("main").css("height","1820px");
                }
                else{
                    $(".black_bg").css({"height":"280px","top":"1610px"});
                }
            }
        }
        
        //함수 실행
        if (typeof exMenuId == "undefined") {
            $(this).quickMenuClick();
        }
        else {
            $("#" + exMenuId).removeClass("current");

            //화면 크기별 이전 blue_border_box 배경 제거
            if(wSize > 1024){
                if(exMenuId == "m1" || exMenuId == "m2" || exMenuId == "m3"){
                    $("#" + exMenuId).removeClass("current_bg_1");
                }
                else{
                    if($("#" + exMenuId).hasClass("current_bg_1")){
                        $("#" + exMenuId).removeClass("current_bg_1");
                    }
                    $("#" + exMenuId).removeClass("current_bg_2");
                }
            }

            else if(wSize < 1024){
                if($("#" + exMenuId).hasClass("current_bg_2")){
                    $("#" + exMenuId).removeClass("current_bg_2");
                }
                
                $("#" + exMenuId).removeClass("current_bg_1");
            }
            
            $("#" + exMenuId).children("img:first-of-type").attr("src", exImgPath);
            $("#" + exMenuId).children("h2, p, span, img:nth-of-type(2)").removeClass("current");
        
            $(this).quickMenuClick();
        }
    });

    $("#m1").trigger("click"); // 페이지 오픈 시 '교통안전교육' 자동 클릭

    
    $(window).resize(function(){
        var wReSize=$(window).width()
        if(wReSize > 1024){
            $("#m3").parent().after($(".qmc_list"));
            $(".qmc_list").css("height","400px");
            $("main").css("height","1000px");
            $(".black_bg").css({"height":"380px","top":"310px"});

            // blue border box 배경 반응형(tab -> pc)
            if(orderValue=="4" || orderValue=="5" || orderValue=="6"){
                if($("#m"+orderValue).hasClass("current_bg_1")){
                    $("#m"+orderValue).removeClass("current_bg_1");
                    $("#m"+orderValue).addClass("current_bg_2");
                }
            }
        }
        else if(wReSize <= 1024  && wReSize > 768){
            if(orderValue=="1" || orderValue=="2" || orderValue=="3"){
                $("#m3").parent().after($(".qmc_list"));
                if(orderValue=="1"){
                    $(".black_bg").css({"top":"310px","height":"395px"});
                    $(".qmc_list").css("height","400px");
                    $("main").css("height","980px");
                }
                else{
                    $(".black_bg").css({"top":"310px","height":"595px"});
                    $(".qmc_list").css("height","600px");
                    $("main").css("height","1180px");
                }
            }
            else{
                $("#m6").parent().after($(".qmc_list"));
                $(".black_bg").css({
                    "top":"570px",
                    "height":"195px"
                });
                $(".qmc_list").css("height","200px");
                $("main").css("height","785px");
            }

            // blue border box 배경 반응형(pc -> tab)
            if(orderValue=="4" || orderValue=="5" || orderValue=="6"){
                if($("#m"+orderValue).hasClass("current_bg_2")){
                    $("#m"+orderValue).removeClass("current_bg_2");
                    $("#m"+orderValue).addClass("current_bg_1");
                }
            }
        }
        else if(wReSize <= 768  && wReSize > 480){
            if(orderValue=="1" || orderValue=="2"){
                $("#m2").parent().after($(".qmc_list"));
    
                if(orderValue=="1"){
                    $(".black_bg").css({"top":"310px","height":"395px"});
                    $(".qmc_list").css("height","400px");
                    $("main").css("height","1250px");
                }
                else{
                    $(".black_bg").css({"top":"310px","height":"595px"});
                    $(".qmc_list").css("height","600px");
                    $("main").css("height","1450px");
                }
            }
            else if(orderValue=="3" || orderValue=="4"){
                $("#m4").parent().after($(".qmc_list"));
                if(orderValue=="3"){
                    $(".black_bg").css({"top":"570px","height":"595px"});
                    $(".qmc_list").css("height","600px");
                    $("main").css("height","1450px");
                }
                else{
                    $(".black_bg").css({"top":"570px","height":"195px"});
                    $(".qmc_list").css("height","200px");
                    $("main").css("height","1080px");
                }
            }
            else{
                $("#m6").parent().after($(".qmc_list"));
                $(".black_bg").css({"top":"830px","height":"195px"});
                $(".qmc_list").css("height","200px");
                $("main").css("height","1080px");
            }
        }
        else{
            $("#m"+orderValue).parent().after($(".qmc_list"));
            if(orderValue=="1"){
                $(".black_bg").css({"top":"310px","height":"380px"});
                $(".qmc_list").css("height","400px");
                $("main").css("height","2020px");
            }
            else if(orderValue=="2" || orderValue=="3"){
                if(orderValue=="2"){
                    $(".black_bg").css("top","570px");
                }
                else{
                    $(".black_bg").css("top","830px");
                }
                $(".black_bg").css("height","480px");
                $(".qmc_list").css("height","500px");
                $("main").css("height","2100px");
            }
            else{
                $("main").css("height","1920px");
                $(".qmc_list").css("height","300px");
    
                if(orderValue=="4"){
                    $(".black_bg").css({"height":"280px","top":"1090px"});
                    
                }
                else if(orderValue=="5"){
                    $(".black_bg").css({"height":"180px","top":"1350px"});
                    $(".qmc_list").css("height","200px");
                    $("main").css("height","1820px");
                }
                else{
                    $(".black_bg").css({"height":"280px","top":"1610px"});
                }
                
            }
        }
        wSize=wReSize; //리사이즈 후 클릭시 화면 크기 인지
    });

/**************************** mobile menu click *************************************/
    $(".menu_btn").click(function(){
        $(".total_menu").addClass("current");
    });

    $(".tm_btn_area img:last-child").click(function(){
        $(".total_menu").removeClass("current");
    });

    $(".total_menu > ul > li").click(function(){
        if($(this).children("ul").is(":hidden")){
            $(".total_menu > ul > li ul").slideUp();
            $(".total_menu > ul > li > img").removeClass("current");
            $(this).children("ul").slideDown();
            $(this).children("img").addClass("current");
        }
        else{
            $(".total_menu > ul > li ul").slideUp();
            $(".total_menu > ul > li > img").removeClass("current");
        }
    });


/**************************** mobile 시험장 위치 클릭 *************************************/
    /*
        .sel_area ul li 높이 : 41
        .sel_wrap 높이 : 450
        .selection 높이 : 500
    */

    var wSize=$(window).width();

    $.fn.extend({
        mobileAreaShow: function(){
            $(".sel_area ul li:first-child").click(function(){
                var sibCnt=$(this).siblings().length;
        
                if($(this).next().is(":hidden")){
                    $(".sel_area ul li:nth-child(n+2)").slideUp();
                    $(this).nextAll().slideDown();
                    $(".selection").css("height",500+(sibCnt * 41)+"px");
                    $(".sel_wrap").css("height",450+(sibCnt * 41)+"px");
                }
                else{
                    $(".sel_area ul li:nth-child(n+2)").slideUp();
                    $(".selection").css("height","500px");
                    $(".sel_wrap").css("height","450px");
                }
            });
        }
    });

    
    if(wSize <= 768){
        $(".sel_area ul li:nth-child(n+2)").addClass("mobile");
        $(".sel_area ul li:first-child").mobileAreaShow();
    }
    

    
    $(window).resize(function(){
        var wReSize=$(window).width();
        
        if(wReSize <= 768){
            $(".sel_area ul li:nth-child(n+2)").css("display","none");
            $(".sel_area ul li:nth-child(n+2)").addClass("mobile");
            $(".sel_area ul li:first-child").off(); //반복실행 방지
            $(".sel_area ul li:first-child").mobileAreaShow();
        }
        else{
            $(".sel_area ul li:nth-child(n+2)").css("display","inline-block");
            $(".sel_area ul li:nth-child(n+2)").removeClass("mobile");
            $(".sel_area ul li:first-child").off();
        }
    });

});



/****************************** mobile menu 버튼 클릭시 스크롤 X **************************************/   
window.onload=function(){
    
    var scrollY = window.pageYOffset;
    var bodyScrollPos;

    window.addEventListener("scroll",function(){
        scrollY=window.pageYOffset;
    })

    var body = document.querySelector("body");

    function bodyScrollLock(){
        bodyScrollPos = scrollY;
        body.style.overflow='hidden';
        body.style.position='fixed';
        body.style.top=`-${bodyScrollPos}px`;
        body.style.width='100%';
    }

    function bodyScrollUnlock(){
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        header.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, bodyScrollPos);
    }

    var subMenuBtn = document.querySelector(".menu_btn");
    var subCloseBtn = document.querySelector(".tm_btn_area > img");

    subMenuBtn.onclick = function(){
        bodyScrollLock();
    }

    subCloseBtn.onclick = function(){
        bodyScrollUnlock();
    }
}