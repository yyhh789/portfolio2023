$(document).ready(function(){


        $('.section1_box3 li').click(function(){

            let i= $(this).index()
            console.log(i)
            $('.section1_box2 div').hide()
            $('.section1_box2 div').eq(0).show();
            $('.section1_box2 div').eq(i+1).show();
        })

        $(window).scroll(function(){

            let sc = $(this).scrollTop();

            let hot = $('.section1').offset().top; 


    
            if(sc>=hot){
                $('.btn').show()
            }
            if(sc<hot){
                $('.btn').hide()
            }
        })
    




            // headerB_btn_box>div를 클릭했을떄 headerB_box의 div가 같은 순번을 찾아 움직여라
            $('.headerB_btn_box>div').click(function(){
                let i =$(this).index()
                console.log(i)
                $('.headerB_box>div').eq(i-1).css({'left':'0'}).stop().animate({'left':'-100%'},1000)
                $('.headerB_box>div').eq(i).css({'left':'100%'}).stop().animate({'left':'0'},1000)

                $('.headerB_btn_box>div').removeClass('on')
                $(this).addClass('on')
                
            },)

            // 3초에 한번씩 자동으로 컴퓨터가 headerB_btn_box>div를 (0,1)클릭해라
            let a =0;
            setInterval(function(){
                a++;
                if(a==2) a=0;
                console.log(a)

                // trigger 핸들러를 통해 마우스를 제어하는 구조
                $('.headerB_btn_box>div').eq(a).trigger('click')
            },5000)






})