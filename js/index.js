window.onload = function(){

    var winWidth=window.innerWidth;

    /**************************** 메인 슬라이더 *******************************/

    var slideList = document.querySelectorAll('.main_slider li');
    var slideWidth = slideList[0].clientWidth;

    function mainSliderSet(){
        for(var i=0; i<slideList.length; i++){
            slideList[i].style.marginLeft=i*slideWidth+'px'
        }
    }
    mainSliderSet();// 최초 배치

    var cnt=0; // 슬라이드 idx를 구하기 위한 변수
    var slideIdx; // 슬라이드 idx 저장

    function slideMove(){
        if(slideIdx!=slideList.length-1){
            for(var i=0; i<slideList.length; i++){
                slideList[i].style.transition='0.4s';
            }
        }
        else{
            for(var i=0; i<slideList.length; i++){
                slideList[i].style.transition='none'; 
                // 마지막 슬라이드 등장 시 모든 transition 제거
            }
        }

        cnt++;
        for(var i=0; i<slideList.length; i++){
            slideIdx = cnt%slideList.length; // 화면에 보이는 슬라이드 idx
            slideList[i].style.marginLeft=(i - slideIdx)*slideWidth+'px'
        }
    }

    setTimeout(function sMove(){
        slideMove();
        if(slideIdx==3 || slideIdx==0)
            setTimeout(sMove, 2500); // 첫 슬라이드와 마지막 슬라이드는 각각 2.5s 동안 보임
        else
            setTimeout(sMove, 5000); // 나머지는 5s
    },5000);

    var body = document.querySelector('body');
    var main = document.querySelector('main');
    var header = document.querySelector('header');
    var headerPos = header.getBoundingClientRect().top;
    var nav = document.querySelector('nav');
    var navTxt = document.querySelectorAll('nav > ul > li span');
    var subMenu = document.querySelectorAll('.sub_menu');

    /**************************** pc nav hover 동작 *******************************/

    function subMenuHide(){
        for(var i=0; i<subMenu.length; i++){
            subMenu[i].style.display='none';
        }
    }

    if(winWidth > 768){
        for(var i=0; i<navTxt.length; i++){
            navTxt[i].addEventListener('mouseover',function(){
                subMenuHide();
                this.nextElementSibling.style.display='inherit';
            });
        }
    
        nav.addEventListener('mouseleave',function(){
            subMenuHide();
        });
    }

    /**************************** 모바일 메뉴 버튼 동작 *******************************/

    var mobileBtn = document.querySelector('.mobile_btn');
    var mbStick = document.querySelectorAll('.mobile_btn p');

    mobileBtn.onclick = function(){

        this.classList.toggle('click');

        for(var i=0; i<3; i++){
            mbStick[i].classList.toggle('click'); // 햄버거 btn 막대기 X
        }
        nav.classList.toggle('current');
        
        for(var i=0; i<navTxt.length; i++){
            navTxt[i].classList.toggle('current'); // 메뉴 font-size 0
        }
        
        if(headerPos >= window.innerHeight/2){
            main.scrollIntoView({behavior:"smooth"});
            // header가 화면 중간 ~ 아래에 있으면 메인 화면으로 이동
            nav.classList.remove('top_zero');
            // main에서 nav바 등장
        }
        else if(headerPos>=0 && headerPos<window.innerHeight/2){
            header.scrollIntoView({behavior:"smooth"});
            //header가 화면 중간 ~ 위에 있으면  header로 이동
            nav.classList.add('top_zero');
            // main 아래에서 nav바 등장
        }
        setTimeout(function(){
            body.classList.toggle('scroll_lock');
        });
    }

    /**************************** mobile nav click 동작 *******************************/

    function mSubMenuHide(){
        for(var i=0; i<subMenu.length; i++){
            subMenu[i].classList.remove('click');
        }   
    }

    var thisHeight;

    if(winWidth <= 768){
        for(var i=0; i<navTxt.length; i++){
            navTxt[i].addEventListener('click',function(){
                if(this.nextElementSibling.classList.contains('click')){
                    mSubMenuHide();
                }
                else{
                    thisHeight=this.nextElementSibling.childElementCount*50; //.sub_menu li의 line-height: 50px
                    document.documentElement.style.setProperty('--smHeight',thisHeight+'px');
                    mSubMenuHide();
                    this.nextElementSibling.classList.add('click');
                }
            });
        }
    }


    var mainPos;

    window.addEventListener('scroll', function(){

        scrollY=window.pageYOffset;
        headerPos=header.getBoundingClientRect().top;
        mainPos=main.getBoundingClientRect().bottom;

        if(mainPos<=header.clientHeight){ // 메인화면 지나가면 nav바 상단에 고정
            header.classList.add('top_zero');
        }
        else{ // 반대로 nav바 하단에 고정
            header.classList.remove('top_zero');
        }

        if(winWidth>768){
            if(mainPos<window.innerHeight){
                for(var i=0; i<subMenu.length; i++){
                    subMenu[i].classList.add('top100');
                }
            }
            else{
                for(var i=0; i<subMenu.length; i++){
                    subMenu[i].classList.remove('top100');
                }
            }
        }
    });
    
    
    /**************************** 미니 종류 슬라이더 *******************************/

    var minis = document.querySelectorAll('.mini_slider ul li');
    var minisWidth = minis[0].clientWidth;
    
    function miniSliderSet(){
        for(var i=0; i<minis.length; i++){
            minis[i].style.marginLeft=i*minisWidth+'px';
        }
    }
    miniSliderSet(); // 최초 배치

    var miniSlider = document.querySelector('.mini_slider ul');
    var msRight = miniSlider.getBoundingClientRect().right; // 슬라이더 공간 오른쪽 위치
    var lastRight; // 마지막 슬라이드 오른쪽 위치

    var prevBtn = document.querySelector('.prev_btn');
    var nextBtn = document.querySelector('.next_btn');

    var clickCnt=0; // 클릭한 횟수에 따라 margin값 곱해서 슬라이드 동작

    nextBtn.onclick = function(){

        lastRight = minis[minis.length - 1].getBoundingClientRect().right;
        // 위치값을 먼저 알아야 아래 코드가 정상적으로 동작함

        if(lastRight < msRight + minisWidth){
            return;
        }
        else{
            clickCnt++;
            for(var i=0; i<minis.length; i++){
                minis[i].style.marginLeft=(i - clickCnt)*minisWidth + 'px';
            }
        }
    }

    prevBtn.onclick = function(){
        if(clickCnt == 0)
            return;
        else{
            clickCnt--;
            for(var i=minis.length-1; i>=0; i--){
                minis[i].style.marginLeft=(i - clickCnt)*minisWidth + 'px';
            }
        }
    }

    /**************************** 하트 클릭 *******************************/

    var like = document.querySelectorAll('.h_area');

    for(var i=0; i<like.length; i++){
        like[i].onclick = function(){
            this.classList.toggle('click');
            if(this.classList.contains('click'))
                alert('관심 매물 목록에 추가합니다.');
            else
                alert('관심 매물 목록에서 제거합니다.');
        }
    }

    /**************************** 지도 출력 *******************************/

    var pin = document.querySelectorAll('.map img');
    var exp = document.querySelectorAll('.exp');

    pin.forEach(function(ele, idx){
        ele.onclick = function(){
            for(var i=0; i<exp.length; i++){
                exp[i].style.display='none';
            }
            exp[idx].style.display='inherit'; // idx번째에 해당하는 exp 출력
        }
    })
    // https://gurtn.tistory.com/134


    /**************************** 브라우저 높이 재설정 *******************************/
    function setScreenSize(){
        var vh=window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
        winWidth=window.innerWidth;

        slideWidth = slideList[0].clientWidth;
        mainSliderSet();

        clickCnt=0; //오류 방지를 위한 슬라이더 재정렬을 위해 0으로 설정
        setTimeout(function(){
            minisWidth=minis[0].clientWidth;
            miniSliderSet();
            msRight = miniSlider.getBoundingClientRect().right;
        },500);
        /*
            모바일 화면 회전 등 매우 짧은 시간에 해상도가 변경되면 minisWidth가 정확히
            반영되지 않기 때문에 setTimeOut으로 너비가 반영될 시간을 벌어줌.
        */        
    }
    setScreenSize();
    
    window.addEventListener('resize',setScreenSize);    
}