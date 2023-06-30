$(document).ready(function(){
    
    let ht = $(window).height();
    
    $('section').height(ht);

    $(window).resize(function(){
        let ht = $(window).height();
    
        $('section').height(ht);
    });

            


// section 위에서 마우스를 올릴떄,내릴떄 이벤트가 발생한다.
    $('section').mousewheel(function(event,delta){
        if(delta>0){
            // 나의 이전요소의 높이값
            let prev = $(this).prev().offset().top 



            $('html,body').stop().animate({scrollTop:prev},800)
        }
        else if (delta<0){
            let next = $(this).next().offset().top 



            $('html,body').stop().animate({scrollTop:next},800)
        }
    })

    $('.sec1').mousemove(function(e){
        let x = e.pageX;
        let y = e.pageY;
        console.log(x,y);

        $(this).find('.sp1').css({'bottom': 20-(y/30),'right': 20-(x/50)})
        $(this).find('.sp2').css({'bottom': 20-(y/10),'left': 20-(x/50)})
        $(this).find('.sp3').css({'bottom': 10-(x/30)})

    });

}) //제이쿼리 끝