window.onload=function(){
    function setScreenSize(){
        var vh=window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh",`${vh}px`);
    }
    setScreenSize();
    window.addEventListener('resize',setScreenSize);

    $('.mobile_btn').click(function(){
        $('header, nav, .mobile_btn p:first-child, .mobile_btn p:nth-child(2), .mobile_btn p:last-child, nav, nav ul li a').toggleClass('click');
        if($('nav').is('.click, .scroll'))
            document.documentElement.style.setProperty('--nav_stick_color', 'white');
            // 가상 요소를 직접 선택할 수 없기 때문에 css 변수 선언 이용
        else
            document.documentElement.style.setProperty('--nav_stick_color', 'black');
    });

    var playerBtn = document.querySelector('.nav_player');
    var chartBtn = document.querySelector('.nav_chart');
    var contentBtn = document.querySelector('.nav_content');
    var pcMelon = document.querySelector('.pc_melon');
    var chart = document.querySelector('.chart');
    var content = document.querySelector('.another_content');

    playerBtn.onclick=function(){
        pcMelon.scrollIntoView({behavior: "smooth"});
    }

    chartBtn.onclick=function(){
        chart.scrollIntoView({behavior: "smooth"});
    }

    contentBtn.onclick=function(){
        content.scrollIntoView({behavior: "smooth"});
    }

    var mainTxt = document.querySelector('.p1_text_area');
    mainTxt.classList.remove('default');

    var navTxt = document.querySelectorAll('nav ul li a');
    var main = document.querySelector('main');
    var mainPos;

    var melon6 = document.querySelector('.melon6');
    var melon6Pos;

    var theme = document.querySelector('.theme');
    var themePos;
    var themeImg = document.querySelectorAll('.theme img');

    var playerMode = document.querySelector('.player_mode');
    var pmPos;

    var chartTxt = document.querySelector('.chart_txt');
    var ctPos;
    
    window.addEventListener('scroll',function(){

        mainPos = main.getBoundingClientRect().top;

        if(mainPos < 0){
            $('header, nav, .mobile_btn p').addClass('scroll'); // nav, mobile_btn p 모바일에서만
            for(var i=0; i<navTxt.length; i++){
                navTxt[i].classList.add('scroll');
            }
            document.documentElement.style.setProperty('--nav_stick_color', 'white');

        }
        else{
            $('header, nav, .mobile_btn p').removeClass('scroll');
            for(var i=0; i<navTxt.length; i++){
                navTxt[i].classList.remove('scroll');
            }
            document.documentElement.style.setProperty('--nav_stick_color', 'black');
        }

        melon6Pos = melon6.getBoundingClientRect().top;

        if(melon6Pos<=0){
            $('.p2_content').css('overflow','scroll');
        }
            
        themePos = theme.getBoundingClientRect().top;
        
        if(themePos <= window.innerHeight - 200){
            for(var i=0; i<themeImg.length; i++){
                themeImg[i].classList.remove('default');
            }
        }
        else{
            for(var i=0; i<themeImg.length; i++){
                themeImg[i].classList.add('default');
            }
        }
        
        pmPos = playerMode.getBoundingClientRect().top;

        if(pmPos <= window.innerHeight - 200){
           $('.pm_1, .pm_2').removeClass('default');
        }
        else{
            $('.pm_1, .pm_2').addClass('default');
        }

        ctPos = chartTxt.getBoundingClientRect().top;

        if(ctPos <= window.innerHeight - 100){
            chartTxt.classList.remove('default');
         }
         else{
            chartTxt.classList.add('default');
         }

    });

    $('.chart p a').mouseover(function(){
        $('.chart p a img').addClass('hover');
        $(this).mouseout(function(){
            $('.chart p a img').removeClass('hover');
        });
    });

    
    /*************************** 무한 슬라이더 ************************************/

    var bannerLeft=0;
    var albumCnt=0;
    var first=1;
    var last;
    var album = $('.album_slider ul li');
    var firstAlbum;
    var lastAlbum;

    album.each(function(){ // 초기에 앨범들 일렬로 위치시킴
        $(this).css('left',bannerLeft);
        bannerLeft += $(this).width();
        $(this).attr("id", "banner"+(++albumCnt)); // album에 id속성 추가(#banner1, #banner2, ...)
    });

    $(window).resize(function(){
        album.each(function(){
            $(this).css('left','-'+$(this).width()+'px'); // resize 후 최대한 빨리 슬라이드가 재등장 할 수 있도록 위치 설정
        });
    });

    var albumSlide=function(){
        album.each(function(){
            $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
        });
        firstAlbum = $("#banner"+first);
        lastAlbum = $("#banner"+last);
        if(firstAlbum.position().left < -(album.width())) { // 제일 앞에 배너 제일 뒤로 옮김
            firstAlbum.css("left", lastAlbum.position().left + lastAlbum.width());
            first++; // 처음엔 1번 배너가 첫번째, 다음엔 2번 배너가 두 번째, ...
            last++; // 처음엔 마직막 배너가 마지막, 다음엔 1번 배너가 마지막, ...
            if(last > albumCnt) { last=1; } // last > 앨범개수 -> 1번 앨범이 라스트
            if(first > albumCnt) { first=1; } // 마지막 앨범이 첫번째가 되면, 다시 첫번째가 첫 배너
        }
    };
    
    last=albumCnt;
    var slideOn=setInterval(albumSlide,15)


    $('.play').mouseover(function(){
        clearInterval(slideOn);
    });
    $('.play').mouseout(function(){
        slideOn=setInterval(albumSlide, 15);
    });

    $('.magazine_area a').mouseover(function(){
        $(this).find('img').css('transform','scale(1.05)');
        $(this).mouseout(function(){
            $(this).find('img').css('transform','scale(1)');
        })
    })
};