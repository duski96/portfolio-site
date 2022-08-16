window.onload = function(){

    function setScreenSize(){// 화면 높이 재설정
        var vh=window.innerHeight * 0.01; // vh 단위값
        document.documentElement.style.setProperty('--vh',`${vh}px`);
    }
    setScreenSize();
    window.addEventListener('resize',setScreenSize);

    
	$('#fullpage').fullpage({//fullPage 플러그인
		autoScrolling:true,
		scrollHorizontally: true,
        scrollOverflow: true
	});
	$.fn.fullpage.setAllowScrolling(true);
    

    $('#new_store_slider').bxSlider({//bxSlider 플러그인
        mode: "horizontal",
        auto: true,
        controls: false,
        autoControls: false,
        pager: true,
    });


    /************************************ nav 동작 *************************************/
    var winWidth = $(window).width();
    var mainMenuList = $('nav > ul > li');
    var subMenu = $('.sub_menu');
    var mobileArrow = $('.mobile_arrow');

    $.fn.extend({
        pcSubMenuShow: function(){// pc버전 nav 동작
            mainMenuList.children('a').mouseenter(function(){
                $(this).siblings('.sub_menu').slideDown();
                mainMenuList.mouseleave(function(){
                    subMenu.slideUp();
                });
            });
            subMenu.mouseenter(function(){
                $(this).siblings('a').addClass('navHover');
                $(this).mouseleave(function(){
                    $(this).siblings('a').removeClass('navHover');
                });
            });
    
            $('.brand_contents a').mouseenter(function(){
                $(this).find('p:last-child').addClass('hover');
                $(this).mouseleave(function(){
                    $(this).find('p:last-child').removeClass('hover')
                });
            });
        },

        mobileSubMenuShow: function(){// mobile버전 nav 동작
            mainMenuList.click(function(){
                if($(this).children('.sub_menu').is(':visible')){
                    subMenu.slideUp();
                    $('.mobile_arrow').removeClass('click');
                }
                else{
                    subMenu.slideUp();
                    mobileArrow.removeClass('click');
                    $(this).children('.sub_menu').slideDown();
                    $(this).children($('.mobile_arrow')).addClass('click');
                }
            });
        }
    });

    $('.mobile_btn, .mobile_cancel').click(function(){// mobile 메뉴버튼 동작
        $('nav').toggleClass('click');
        if($('nav').hasClass('click')){
            $.fn.fullpage.setAllowScrolling(false);// 모바일 메뉴 뜬 상태에서 다른페이지 이동 X
        }
        else{
            $.fn.fullpage.setAllowScrolling(true);
        }
    });

    if(winWidth>768)
        mainMenuList.pcSubMenuShow();
    else
        mainMenuList.mobileSubMenuShow();
    

    $(window).resize(function(){
        // 테블릿의 경우 가로모드, 세로모드에 따라 nav가 달라지기 때문에 화면 사이즈 변경에 따른 nav바 동작 재설정 필요
        winWidth = $(window).width();
        mainMenuList.off();
        mainMenuList.children('a').off();
        $('.brand_contents a').off(); //각각 요소에 걸린 이벤트를 미리 없애야 오류가 발생하지 않음

        if(winWidth>768)
            mainMenuList.pcSubMenuShow();
        else
            mainMenuList.mobileSubMenuShow();
    });
    
};