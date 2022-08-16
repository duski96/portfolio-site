window.onload=function(){

    /******************************* 한 글자씩 타이핑 ***************************/

    var welcome = "Welcome to my portfolio.";
    var typeArea = document.querySelector(".typing");
    var iType=0;

    function typing(){
        if(iType < welcome.length) {
            var txt = welcome[iType];
            typeArea.innerHTML += txt;
            iType++;
        }
    }
    setInterval(typing, 100);

    /************************* nav 버튼 동작 ************************************/

    var navBtn = document.querySelectorAll("nav ul li");    
    var homeBtn = navBtn[0];
    var aboutBtn = navBtn[1];
    var worksBtn = navBtn[2];
    var contactBtn = navBtn[3];

    var home = document.querySelector(".home");
    var about = document.querySelector(".about");
    var works = document.querySelector(".works");
    var contact = document.querySelector(".contact");

    homeBtn.addEventListener("click",function(e){
        home.scrollIntoView({behavior:"smooth"});
        e.preventDefault();
    });

    aboutBtn.addEventListener("click",function(e){
        about.scrollIntoView({behavior:"smooth"});
        e.preventDefault();
    });

    worksBtn.addEventListener("click",function(e){
        works.scrollIntoView({behavior:"smooth"});
        e.preventDefault();
    });

    contactBtn.addEventListener("click",function(e){
        contact.scrollIntoView({behavior:"smooth"});
        e.preventDefault();
    });

    /***************** skill 이미지에 hover 하면 설명 출력 *************************/

    var skillList = document.querySelectorAll(".skill ul li");
    var skillImg = document.querySelectorAll(".skill ul li img");

    function skillExp(idx){
        skillImg[idx].addEventListener("mouseover",function(e){
            this.nextElementSibling.classList.add("hover"); //nextSibling은 공백을 반환하기 때문에 사용 X
        });
        
        skillImg[idx].addEventListener("mouseout",function(e){
            this.nextElementSibling.classList.remove("hover");
        });
        
    }
    
    for(var i=0; i<skillList.length; i++){
        skillExp(i);
    }

    /************************* work slider 동작 ************************************/

    var slide = document.querySelectorAll('.work_slider ul li');
    var slideWidth = slide[0].clientWidth;

    function sliderSet(){
        slide.forEach(function(ele,idx){
            ele.style.marginLeft=idx*(slideWidth+70)+'px';
        });
    }
    sliderSet();


    var prevBtn = document.querySelector('.prev_btn');
    var nextBtn = document.querySelector('.next_btn');

    var clickCnt = 0;

    nextBtn.onclick = function(){
        lastRight=slide[slide.length-1].getBoundingClientRect().right;

        if(clickCnt==slide.length-1)
            return;
        else{
            clickCnt++;
            slide.forEach(function(ele,idx){
                ele.style.marginLeft=(idx-clickCnt)*(slideWidth+70)+'px';
            });
        }
    };

    prevBtn.onclick = function(){
        if(clickCnt==0)
            return;
        else{
            clickCnt--;
            slide.forEach(function(ele,idx){
                ele.style.marginLeft=(idx-clickCnt)*(slideWidth+70)+'px';
            });
        }
    };

    var nav = document.querySelector('nav');
    var navUl = document.querySelector('nav ul');
    var mainTop;
    
    window.addEventListener('scroll',function(){
        mainTop = home.getBoundingClientRect().top;
        if(mainTop<0){
            nav.classList.add('scroll');
            navUl.classList.add('scroll');
        }
        else{
            nav.classList.remove('scroll');
            navUl.classList.remove('scroll');
        }
    });

    var summary = document.querySelectorAll('.summary');
    slide.forEach(function(ele, idx){
        ele.addEventListener('mouseover',function(){
            summary[idx].classList.add('hover');
        });
        ele.addEventListener('mouseout',function(){
            summary[idx].classList.remove('hover');
        });
    })

    var readMoreBtn = document.querySelectorAll('.more');
    var workContent = document.querySelectorAll('.work_content');
    var body = document.querySelector('body');

    readMoreBtn.forEach(function(ele,idx){
        ele.onclick = function(){
            workContent[idx].style.display='inherit';
            body.style.overflowY='hidden';
            cancelArea.style.display='inherit';
        }
    });

    var cancelArea = document.querySelector('.cancel_area');
    var cancelBtn = document.querySelector('.cancel_btn');

    cancelBtn.onclick = function(){
        workContent.forEach(function(ele,idx){
            ele.style.display='none';
        })
        cancelArea.style.display='none';
        body.style.overflowY='inherit';
    }

    function setScreenSize(){
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh",`${vh}px`);
        
        winWidth = window.innerWidth;

        slideWidth = slide[0].clientWidth;
        sliderSet();
    }
    setScreenSize();
    window.addEventListener("resize",setScreenSize);
}

