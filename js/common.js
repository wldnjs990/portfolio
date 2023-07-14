// 페이지 로드 후 스크롤 위치를 지정
$(window).on('load', function() {
  var targetSection = '.page'; // 화면이 시작될 섹션의 선택자
  
  scrollToSection(targetSection);
});
// 스크롤 위치를 지정된 섹션으로 이동하는 함수
function scrollToSection(sectionSelector) {
  var sectionOffset = $(sectionSelector).offset().top;
  $('html, body').animate({ scrollTop: sectionOffset }, 300);
}
/*헤더 숨기기*/
/*--header_scroll---------------------------*/
var action_scroll;
var now_scroll_top=0;
var start_position=5;
var nav_bar_height=$('.header').outerHeight();

//스크롤시에 사용자가 스크롤 했다는 것을 알림
$(window).scroll(function(event) {    
        action_scroll = true;
    });

setInterval(function(){ //setInterval : 호출함수(일정시간 간격을 두고 함수 실행)
    if(action_scroll){
    hasScrolled();
    action_scroll=false; //리셋
    }
}, 250);  //250ms(시간단위, 1초 1000분 1)마다

//has_scrolled()실행하고 action_scroll 상태를 재설정

//hasScrolled 동작 구현
function hasScrolled(){
    //헤더의 높이보다 더 스크롤이 되었을 경우
    var st = $(this).scrollTop(); //현재 스크롤의 위치를 저장
    if(Math.abs(now_scroll_top - st) <= start_position) //현재 스크롤 값 반환
    return;   //return 실행후 종료, 위치값 호출

        if(st > now_scroll_top && st > nav_bar_height){
        $('.header').removeClass('header-down').addClass('header-up');
    } else {
        if(st + $(window).height()<$(document).height()){
            $('.header').removeClass('header-up').addClass('header-down');
        }
    }
    now_scroll_top = st;
}
/*--//header_scroll-------------------------*/

$("document").ready(function(){
//페이지 시작시 애니메이션 작동
  // 화면 고정 시간 (단위: 초)
  var fixedTime = 6;
  
  // 화면 고정 함수
  function fixScreen() {
    // 화면 스크롤 방지
    $('body').css('overflow', 'hidden');
    
    // 고정 시간 후에 화면 스크롤 가능하도록 설정
    setTimeout(function() {
      $('body').css('overflow', 'auto');
    }, fixedTime * 1000); // 초를 밀리초로 변환
  }
  
  // 화면 고정 실행
  fixScreen();
  
  // 화면 자동 스크롤 함수
  function autoScroll() {
    // 화면 높이
    var windowHeight = $(window).height();
    
    // 화면 자동 스크롤
    $('html, body').animate({ scrollTop: windowHeight }, 1000);
  }
  
  // 일정 시간 후에 자동 스크롤 실행
  setTimeout(function() {
    autoScroll();
  }, fixedTime * 1000);




//페이지 새로고침 버튼
$('.header .re').click(function(){
    location.reload();
});
//메인 컨텐츠 isotope
$(".main-content").imagesLoaded(function(){
    
    $(".main-content").isotope({
        itemSelector : ".content"
        
    })
})
$(".main .main-nav li").click(function(){
    
    $(".main .main-nav li").removeClass("on");
    $(this).addClass("on");
    var selector = $(this).attr("data-filter");
    $(".main-content").isotope({
        filter : selector
    })       
})

//메인 페이지 siwper
var swiper = new Swiper(".cent", {
    allowTouchMove : false, 
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });

/*info창으로 넘어가고 새로고침시 info높이로 main화면이 고정되는 오류 수정 코드*/
$('.swiper-wrapper .main').prop("style").removeProperty("height");
$('.swiper-wrapper .info').css({'height':'0'})
/*info창으로 넘어가고 새로고침시 info높이로 main화면이 고정되는 오류 수정 코드*/

$('.btn-next').click(function(){
    $('.btn-wrap > button').removeClass('on')
    $(this).addClass('on')
    $('.swiper-wrapper .info').prop("style").removeProperty("height");
    $('.swiper-wrapper .main').css({'height':'0'})
});
$('.btn-prev').click(function(){
    $('.btn-wrap > button').removeClass('on')
    $(this).addClass('on')
    $('.swiper-wrapper .main').prop("style").removeProperty("height");
    $('.swiper-wrapper .info').css({'height':'0'})
});



});
