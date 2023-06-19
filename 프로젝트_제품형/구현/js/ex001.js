$(document).ready(function(){
    // 사이트를 열자마자 이루어지는 이벤트
    $('.popUp span').click(function(){
        $('.popUp').css({'display':'none'});
    })

    // 일정시간이 지나면 동작이 이루어져라
    setTimeout(function(){
        $('.mainImg').addClass('on')
    },1000)

    // 스크롤을 했을떄 이루어지는 이벤트들

    // 스크롤을 했을떄 , hero글씨가 브라우저와 맞닿았을떄,
    // mainImg 가 사라져라
    $(window).scroll(function(){

        let sc = $(this).scrollTop();
        $('nav li').eq(0).text(sc);
        

        let hot = $('#heroTxt').offset().top; 
        $('nav li').eq(1).text(hot);

        if(sc>=hot){
            $('.mainImg').addClass('hold')
        }
        if(sc<hot){
            $('.mainImg').removeClass('hold')
        }
    })

})