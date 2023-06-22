$(document).ready(function(){


    // toggle2의 span을 클릭했을때, gnb2가 나타나라
    $('.toggle>a').click(function(){
        $('.cc').fadeToggle()



    })


//수량 옵션
$('._count :button').on({
    'click' : function(e){
        e.preventDefault();
        var $count = $(this).parent('._count').find('.inp');
        var now = parseInt($count.val());
        var min = 1;
        var max = 999;
        var num = now;
        var i = $(this).parent('.header_D_sell').find('.sell_1');

        if($(this).hasClass('minus')){
            var type = 'm';
        }else{
            var type = 'p';
        }
        if(type=='m'){
            if(now>min){
                num = now - 1;
            }
        }else{
            if(now<max){
                num = now + 1;
            }
        }
        if(num != now){
            $count.val(num);
        }
    }
});





    
})//끝 