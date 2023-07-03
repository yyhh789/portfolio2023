$(document).ready(function(){
    
    let ht = $(window).height();
    
    $('section').height(ht);

    $(window).resize(function(){
        let ht = $(window).height();
    
        $('section').height(ht);
    });

            

    // nav li 를 클릭할때마scrollTop 다 의 위치를 바꾸어라.
    $(window).scroll(function(){
    
        let sc = $(window).scrollTop()
            // $('h1').text(sc)
    })
    
    $('.nav li').click(function(e){
        e.preventDefault()
    
        let i = $(this).index()
        console.log(i);
        let ht  = $(window).height();
    
        $('html,body').stop().animate({scrollTop:ht*i},1400)
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


// character
    $('.character1').click(function(){
        $('.a_info').css({'display':'block'});
        $('.b_info').css({'display':'none'});
        $('.c_info').css({'display':'none'});
        $('.d_info').css({'display':'none'});
    })

    $('.a_i').click(function(){
        $('.a_info').css({'display':'none'});
    })

    $('.character2').click(function(){
        $('.a_info').css({'display':'none'});
        $('.b_info').css({'display':'block'});
        $('.c_info').css({'display':'none'});
        $('.d_info').css({'display':'none'});
    })

    $('.b_i').click(function(){
        $('.b_info').css({'display':'none'});
    })

    $('.character3').click(function(){
        $('.a_info').css({'display':'none'});
        $('.b_info').css({'display':'none'});
        $('.c_info').css({'display':'block'});
        $('.d_info').css({'display':'none'});
    })

    $('.c_i').click(function(){
        $('.c_info').css({'display':'none'});
    })

    $('.character4').click(function(){
        $('.a_info').css({'display':'none'});
        $('.b_info').css({'display':'none'});
        $('.c_info').css({'display':'none'});
        $('.d_info').css({'display':'block'});
    })

    $('.d_i').click(function(){
        $('.d_info').css({'display':'none'});
    })




    // gallery
    $('.g1').click(function(){
        $('.hide_gallery').css({'display':'block'});
        $('.hg1').css({'display':'block'});
        $('.hg2').css({'display':'none'});
        $('.hg3').css({'display':'none'});
        $('.hg4').css({'display':'none'});
        $('.hg5').css({'display':'none'});
        $('.hg6').css({'display':'none'});
        $('.hg7').css({'display':'none'});
    })


    $('.font_x').click(function(){
        $('.hide_gallery').css({'display':'none'});
    })


        $('.g2').click(function(){
            $('.hide_gallery').css({'display':'block'});
        $('.hg1').css({'display':'none'});
        $('.hg2').css({'display':'block'});
        $('.hg3').css({'display':'none'});
        $('.hg4').css({'display':'none'});
        $('.hg5').css({'display':'none'});
        $('.hg6').css({'display':'none'});
        $('.hg7').css({'display':'none'});
        })
    
    
        $('.font_x').click(function(){
            $('.hide_gallery').css({'display':'none'});
        })


    $('.g3').click(function(){
        $('.hide_gallery').css({'display':'block'});
        $('.hg1').css({'display':'none'});
        $('.hg2').css({'display':'none'});
        $('.hg3').css({'display':'block'});
        $('.hg4').css({'display':'none'});
        $('.hg5').css({'display':'none'});
        $('.hg6').css({'display':'none'});
        $('.hg7').css({'display':'none'});
    })


    $('.font_x').click(function(){
        $('.hide_gallery').css({'display':'none'});
    })


        $('.g4').click(function(){
            $('.hide_gallery').css({'display':'block'});
        $('.hg1').css({'display':'none'});
        $('.hg2').css({'display':'none'});
        $('.hg3').css({'display':'none'});
        $('.hg4').css({'display':'block'});
        $('.hg5').css({'display':'none'});
        $('.hg6').css({'display':'none'});
        $('.hg7').css({'display':'none'});
        })
    
    
        $('.font_x').click(function(){
            $('.hide_gallery').css({'display':'none'});
        })


    $('.g5').click(function(){
        $('.hide_gallery').css({'display':'block'});
        $('.hg1').css({'display':'none'});
        $('.hg2').css({'display':'none'});
        $('.hg3').css({'display':'none'});
        $('.hg4').css({'display':'none'});
        $('.hg5').css({'display':'block'});
        $('.hg6').css({'display':'none'});
        $('.hg7').css({'display':'none'});
    })


    $('.font_x').click(function(){
        $('.hide_gallery').css({'display':'none'});
    })


        $('.g6').click(function(){
            $('.hide_gallery').css({'display':'block'});
        $('.hg1').css({'display':'none'});
        $('.hg2').css({'display':'none'});
        $('.hg3').css({'display':'none'});
        $('.hg4').css({'display':'none'});
        $('.hg5').css({'display':'none'});
        $('.hg6').css({'display':'block'});
        $('.hg7').css({'display':'none'});
        })
    
    
        $('.font_x').click(function(){
            $('.hide_gallery').css({'display':'none'});
        })


    $('.g7').click(function(){
        $('.hide_gallery').css({'display':'block'});
        $('.hg1').css({'display':'none'});
        $('.hg2').css({'display':'none'});  
        $('.hg3').css({'display':'none'});
        $('.hg4').css({'display':'none'});
        $('.hg5').css({'display':'none'});
        $('.hg6').css({'display':'none'});
        $('.hg7').css({'display':'block'});
    })


    $('.font_x').click(function(){
        $('.hide_gallery').css({'display':'none'});
    })

}) //제이쿼리 끝