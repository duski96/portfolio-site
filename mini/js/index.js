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
    mainSliderSet();//최초 배치

    var cnt=0; //슬라이드 idx를 구하기 위한 변수
    var slideIdx; //슬라이드 idx 저장

    function slideMove(){//슬라이드 동작
        if(slideIdx!=slideList.length-1){
            for(var i=0; i<slideList.length; i++){
                slideList[i].style.transition='0.4s';
            }
        }
        else{
            for(var i=0; i<slideList.length; i++){
                slideList[i].style.transition='none'; 
                //마지막 슬라이드 등장 시 모든 transition 제거
            }
        }

        cnt++;
        for(var i=0; i<slideList.length; i++){
            slideIdx = cnt%slideList.length; //화면에 보이는 슬라이드 idx
            slideList[i].style.marginLeft=(i - slideIdx)*slideWidth+'px'
        }
    }

    setTimeout(function sMove(){
        slideMove();
        if(slideIdx==3 || slideIdx==0)
            setTimeout(sMove, 2500); //첫 슬라이드와 마지막 슬라이드는 각각 2.5s 동안 보임
        else
            setTimeout(sMove, 5000); //나머지는 5s
    },5000);

    var body = document.querySelector('body');
    var main = document.querySelector('main');
    var header = document.querySelector('header');
    var headerPos = header.getBoundingClientRect().top;
    var nav = document.querySelector('nav');
    var navTxt = document.querySelectorAll('nav > ul > li span');
    var subMenu = document.querySelectorAll('.sub_menu');

    /**************************** pc nav 동작 *******************************/

    function subMenuHide(){ //서브메뉴 숨김
        for(var i=0; i<subMenu.length; i++){
            subMenu[i].style.display='none';
        }
    }

    function thisSub(){ //선택한 요소의 형제 서브메뉴만 출력
        subMenuHide();
        this.nextElementSibling.style.display='inherit';
    }

    function pcNav(){
        subMenuHide(); //태블릿 회전(작은화면 -> 큰화면)을 대비한 설정(pc -> display:none이 기본 / mobile -> display: inherit이 기본)

        for(var i=0; i<navTxt.length; i++){
            navTxt[i].removeEventListener('click',mThisSub);
        }//태블릿 회전했을 경우 mobile화면 관련 nav동작 이벤트 제거
        
        for(var i=0; i<navTxt.length; i++){
            navTxt[i].addEventListener('mouseover',thisSub);
        }
        nav.addEventListener('mouseleave',subMenuHide);
        //pc nav동작 이벤트 추가
    }

    /**************************** 모바일 메뉴 버튼 동작 *******************************/

    var mobileBtn = document.querySelector('.mobile_btn');
    var mbStick = document.querySelectorAll('.mobile_btn p');

    mobileBtn.onclick = function(){

        this.classList.toggle('click');

        for(var i=0; i<3; i++){
            mbStick[i].classList.toggle('click'); //햄버거 btn 막대기 X
        }
        nav.classList.toggle('current');
        
        for(var i=0; i<navTxt.length; i++){
            navTxt[i].classList.toggle('current'); //메뉴 font-size 0
        }
        
        if(headerPos >= window.innerHeight/2){
            main.scrollIntoView({behavior:"smooth"});
            //header가 화면 중간 ~ 아래에 있으면 메인 화면으로 이동
            nav.classList.remove('top_zero');
            //main에서 nav바 등장
        }
        else if(headerPos>=0 && headerPos<window.innerHeight/2){
            header.scrollIntoView({behavior:"smooth"});
            //header가 화면 중간 ~ 위에 있으면  header로 이동
            nav.classList.add('top_zero');
            //main 아래에서 nav바 등장
        }

        body.classList.toggle('scroll_lock');//서브메뉴 등장 시 스크롤 X

    }

    /**************************** mobile nav click 동작 *******************************/

    function subMenuInherit(){//pc에서 서브메뉴 기본값이 display:none이기 때문에 pc->mobile 화면 변경 대비
        for(var i=0; i<subMenu.length; i++){
            subMenu[i].style.display='inherit';
        }
    }

    function mSubMenuHide(){//모바일 서브메뉴 숨김
        for(var i=0; i<subMenu.length; i++){
            subMenu[i].classList.remove('click');
        }   
    }

    var thisHeight;// css변수의 (높이)값을 저장하기 위한 변수

    function mThisSub(){//모바일 선택한 요소 형제 서브메뉴 출력
        if(this.nextElementSibling.classList.contains('click')){
            mSubMenuHide();
        }
        else{
            thisHeight=this.nextElementSibling.childElementCount*50; //.sub_menu li의 line-height: 50px
            document.documentElement.style.setProperty('--smHeight',thisHeight+'px');
            mSubMenuHide();
            this.nextElementSibling.classList.add('click');
        }
    }


    function mobileNav(){
        subMenuInherit();//큰 화면에서 작은 화면으로 변할 때 초기 설정

        for(var i=0; i<navTxt.length; i++){
            navTxt[i].removeEventListener('mouseover',thisSub);
        }
        nav.removeEventListener('mouseleave',subMenuHide);
        //pc nav동작 이벤트 제거

        for(var i=0; i<navTxt.length; i++){
            navTxt[i].addEventListener('click',mThisSub);
        }// mobile nav동작 이벤트 추가
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
        }// pc에서 스크롤 하면 서브메뉴가 아래에, 아니면 위에 나타남
    });
    
    
    /**************************** 미니 종류 슬라이더 *******************************/

    var minis = document.querySelectorAll('.mini_slider ul li');
    var minisWidth = minis[0].clientWidth;
    
    function miniSliderSet(){
        for(var i=0; i<minis.length; i++){
            minis[i].style.marginLeft=i*minisWidth+'px';
        }
    }
    miniSliderSet(); //miniSlider 최초 배치

    var miniSlider = document.querySelector('.mini_slider ul');
    var msRight = miniSlider.getBoundingClientRect().right; // 슬라이더 공간 오른쪽 위치
    var lastRight; // 마지막 슬라이드 오른쪽 위치

    var prevBtn = document.querySelector('.prev_btn');
    var nextBtn = document.querySelector('.next_btn');

    var clickCnt=0; // 클릭한 횟수에 따라 margin값 곱해서 슬라이드 동작

    nextBtn.onclick = function(){

        lastRight = minis[minis.length - 1].getBoundingClientRect().right;
        // 위치값을 먼저 알아야 아래 코드가 정상적으로 동작함

        if(lastRight < msRight + minisWidth){//마지막 슬라이드가 슬라이더 끝에 걸칠 때
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

        if(winWidth>768)
            pcNav();
        else
            mobileNav();
        //각각 이벤트 제거 과정은 해당 함수에 포함

        slideWidth = slideList[0].clientWidth;
        mainSliderSet();//화면 사이즈 변할 때 mainSlider 재배치

        clickCnt=0; //오류 방지를 위한 miniSlider 재정렬을 위해 0으로 설정
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