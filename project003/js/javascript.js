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
    
        $('html,body').stop().animate({scrollTop:ht*i},800)
    });

    
// 메뉴 클릭시 sec2가 나타나라
    $('.menu_img').click(function(e){
        e.preventDefault()
    
        let i = $(this).index()
        console.log(i);

    
        $('.sec2').css({'left':'-100%'}).stop().animate({'left':'0'},800)
    });

    // 메뉴 back 클릭시 사라짐
    $('.bc1').click(function(e){
        e.preventDefault()
    
        let i = $(this).index()
        console.log(i);
    
        $('.sec2').css({'left':'0%'}).stop().animate({'left':'-100%'},800)
    });



    $('.nav1').click(function(e){
        e.preventDefault()
    
        let i = $(this).index()
        console.log(i);
    
        $('.sec2').css({'left':'0%'}).stop().animate({'left':'-100%'},800)
    });

    $('.nav2').click(function(e){
        e.preventDefault()
    
        let i = $(this).index()
        console.log(i);
    
        $('.sec2').css({'left':'0%'}).stop().animate({'left':'-100%'},800)
    });

    $('.nav3').click(function(e){
        e.preventDefault()
    
        let i = $(this).index()
        console.log(i);
    
        $('.sec2').css({'left':'0%'}).stop().animate({'left':'-100%'},800)
    });

    $('.nav4').click(function(e){
        e.preventDefault()
    
        let i = $(this).index()
        console.log(i);
    
        $('.sec2').css({'left':'0%'}).stop().animate({'left':'-100%'},800)
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

    // vid

    $('.vv1').click(function(){
        $('.vid_b').css({'display':'block'});
        $('.v4').css({'display':'block'});
        $('.v5').css({'display':'none'});  
        $('.v6').css({'display':'none'});


    })


    $('.font_x1').click(function(){
        $('.vid_b').css({'display':'none'});
    })

    $('.vv2').click(function(){
        $('.vid_b').css({'display':'block'});
        $('.v4').css({'display':'none'});
        $('.v5').css({'display':'block'});  
        $('.v6').css({'display':'none'});


    })


    $('.font_x1').click(function(){
        $('.vid_b').css({'display':'none'});
    })

    $('.vv3').click(function(){
        $('.vid_b').css({'display':'block'});
        $('.v4').css({'display':'none'});
        $('.v5').css({'display':'none'});  
        $('.v6').css({'display':'block'});


    })


    $('.font_x1').click(function(){
        $('.vid_b').css({'display':'none'});
    })


var cursorBig = document.querySelector('.big');
var cursorSmall = document.querySelector('.small');


document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorBig.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorSmall.style.left = x + 'px';
  cursorSmall.style.top = y + 'px';
});


document.addEventListener('mousedown', function(){
  cursorBig.classList.add('click');
  cursorSmall.classList.add('hover__small')
});


document.addEventListener('mouseup', function(){
  cursorBig.classList.remove('click')
  cursorSmall.classList.remove('hover__small')
});



}) //제이쿼리 끝