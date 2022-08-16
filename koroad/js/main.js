$(document).ready(function () {
    
/****************************** bxSlider 설정 **************************************/
    $('.slider').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: true,
        pager: false,
    });

    $('.banner_slider').bxSlider({
        mode: 'fade',
        auto: true,
        autoControls: true,
        stopAutoOnClick: false,
        pager: false,
        controls: false
    });


/****************************** subMenu show 설정 **************************************/

    $.fn.extend({
        pcSubMenuShow: function(){
            $("nav > ul > li span").mouseenter(function(){ // slideUp 중 mouseenter 오작동 방지
                $(this).siblings("ul").slideDown();
            });
            $("nav > ul > li").mouseleave(function(){
                $(this).children("ul").slideUp();
            });
        }
    });

    $.fn.extend({
        mobileSubMenuShow: function(){
            $("nav > ul > li").click(function(){
                if($(this).children("ul").is(":visible")){
                    $(this).children("ul").slideUp();
                    $(this).children("img").css("transform","rotate(0deg)");
                }
                else{
                    $("nav > ul > li > ul").slideUp();
                    $("nav > ul > li > img").css("transform","rotate(0deg)");
                    $(this).children("ul").slideDown();
                    $(this).children("img").css("transform","rotate(180deg)");
                }
            });
        }
    });

    $(".mobile_btn").click(function(){
        $("nav > ul").addClass("current");
    });

    $(".hx img:last-child").click(function(){
        $("nav > ul").removeClass("current");
    });

    // 반응형
    var wSize=$(window).width();

    if(wSize > 1024){
        $("nav > ul > li span").pcSubMenuShow();
    }
    else{
        $("nav > ul > li span").mobileSubMenuShow();
    }

    $(window).on("resize", function(){

        var wReSize=$(window).width();
    
        if(wReSize > 1024){
            $("nav > ul > li").off();
            $("nav > ul > li span").pcSubMenuShow();
        }
        else{
            $("nav > ul > li span").off();
            $("nav > ul > li span").mobileSubMenuShow();
        }
    });
    
 /****************************** mainPage 설정 **************************************/   
    /*****************************ESG경영*********************************/
    $(".e_content a").mouseenter(function(){
        $(this).children("img").css({"left":"5%"});
    });
    $(".e_content a").mouseleave(function(){
        $(this).children("img").css({"left":"0"});
    });
    /******************************소개메뉴*********************************/
    $(".introduce ul li a").mouseenter(function(){
        $(this).children("img, p").addClass("hover");
    });
    $(".introduce ul li a").mouseleave(function(){
        $(this).children("img, p").removeClass("hover");
    });
    /*******************************민원메뉴********************************/
    $(".title_area a").mouseenter(function(){
        $(this).children("img").addClass("hover");
    });

    $(".title_area a").mouseleave(function(){
        $(this).children("img").removeClass("hover");
    });


    $(".sd_content").mouseenter(function(){
        $(this).children(".black_label").addClass("hover");
    });
    $(".sd_content").mouseleave(function(){
        $(this).children(".black_label").removeClass("hover");
    });
    /*****************************공지사항**********************************/
    $(".notice_area ul li").click(function(){

        var noticeNum=$(this).index()+1;

        $(".notice_area ul li").removeClass("current");
        $(this).addClass("current");

        $(".notice_area table").css({"display":"none"});
        $("#n"+noticeNum).fadeIn();
    });

    $(".notice_area ul li:first-child").trigger("click");

});


/****************************** mobile menu 등장시 스크롤 X **************************************/   
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

    var mainMenuBtn = document.querySelector(".mobile_btn");
    var mainCloseBtn = document.querySelector(".hx img:last-child");

    mainMenuBtn.onclick = function(){
        bodyScrollLock();
    }

    mainCloseBtn.onclick = function(){
        bodyScrollUnlock();
    }
}