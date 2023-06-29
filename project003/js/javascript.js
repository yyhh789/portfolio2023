$(document).ready(function(){



    $('.sec1').mousemove(function(e){
        let x = e.pageX;
        let y = e.pageY;
        console.log(x,y);

        $(this).find('.sp1').css({'bottom': 20-(y/30),'right': 20-(x/50)})
        $(this).find('.sp2').css({'bottom': 20-(y/10),'left': 20-(x/50)})
        $(this).find('.sp3').css({'bottom': 10-(x/30)})

    });



    
    $('section').mousewheel(function(event,delta){
        if(delta>0){
            
            let prev = $(this).prev().offset().top 



            $('html,body').stop().animate({scrollTop:prev},1400,'easeOutBounce')
        }
        else if (delta<0){
            let next = $(this).next().offset().top 



            $('html,body').stop().animate({scrollTop:next},1400,'easeOutBounce')
        }
    });


})