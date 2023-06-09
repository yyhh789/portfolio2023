$(document).ready(function(){

// 마우스커서 동작
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

// 커서가 가 버튼박스 안에 들어갔을때 커서 보더색이 바뀌어라. 
    
    
    $('.generate-button').mouseenter(function(){
    
      $('.big').addClass('style1')
      $('.small').addClass('style2')
  })
  
  $('.generate-button').mouseleave(function(){
  
      $('.big').removeClass('style1')
      $('.small').removeClass('style2')
  })

// 버튼동작
const DOT_AMOUNT = 40;

const createSVG = (width, height, className, childType, childAttributes) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.classList.add(className);

  const child = document.createElementNS(
    "http://www.w3.org/2000/svg",
    childType
  );

  svg.setAttributeNS(
    "http://www.w3.org/2000/svg",
    "viewBox",
    `0 0 ${width} ${height}`
  );

  for (const attr in childAttributes) {
    child.setAttribute(attr, childAttributes[attr]);
  }

  svg.appendChild(child);

  return { svg, child };
};

document.querySelectorAll(".generate-button").forEach((button) => {
  const width = button.offsetWidth;
  const height = button.offsetHeight;

  const style = getComputedStyle(button);

  const { svg, child: circle } = createSVG(width, height, "dots", "circle", {
    cx: "0",
    cy: "0",
    r: "0",
  });

  const strokeGroup = document.createElement("div");
  strokeGroup.classList.add("stroke");

  const { svg: stroke } = createSVG(width, height, "stroke-line", "rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    rx: parseInt(style.borderRadius, 10),
    ry: parseInt(style.borderRadius, 10),
    pathLength: "10",
  });

  button.appendChild(svg);

  strokeGroup.appendChild(stroke);
  strokeGroup.appendChild(stroke.cloneNode(true));

  button.appendChild(strokeGroup);


  for (var i = 0; i < DOT_AMOUNT; i++) {
    var p = circle.cloneNode(true);
    svg.appendChild(p)
  }

  svg.removeChild(circle);

})


$('nav li').click(function(){
  let i = $(this).index()
  console.log(i);
  $('article').removeClass('on')
  $('article').eq(i).addClass('on')

})




$('nav li').eq(0).click(function(){
  $('header').stop().css({}).animate({'top':'50%'},800)
  $('header nav ul').stop().css({'display':'block'}).animate({},800)
  $('header nav ul').stop().css({'margin-left':'1100px'}).animate({},800)

  $('.learning p').stop().css({}).animate({'width': '0%'},400)
  $('.basic p').stop().css({}).animate({'width': '0%'},400)
  $('.intermediate p').stop().css({}).animate({'width': '0%'},400)
  $('.advanced p').stop().css({}).animate({'width': '0%'},400)
  $('.expert p').stop().css({}).animate({'width': '0%'},400)
})

$('nav li').eq(1).click(function(){
  $('header').stop().animate({'top':'159px'},800)
  $('header nav ul').stop().css({'display':'flex'}).animate({},800)
  $('header nav ul').stop().css({'justify-content':'center'}).animate({},800)
  $('header nav ul').stop().css({'margin-left':'0px'}).animate({},800)
  $('header nav ul li').stop().css({'margin-left':'20px'}).animate({},800)

  $('.learning p').stop().css({}).animate({'width': '0%'},400)
  $('.basic p').stop().css({}).animate({'width': '0%'},400)
  $('.intermediate p').stop().css({}).animate({'width': '0%'},400)
  $('.advanced p').stop().css({}).animate({'width': '0%'},400)
  $('.expert p').stop().css({}).animate({'width': '0%'},400)
})

$('nav li').eq(2).click(function(){
  $('header').stop().animate({'top':'159px'},800)
  $('header nav ul').stop().css({'display':'flex'}).animate({},800)
  $('header nav ul').stop().css({'justify-content':'center'}).animate({},800)
  $('header nav ul').stop().css({'margin-left':'0px'}).animate({},800)
  $('header nav ul li').stop().css({'margin-left':'20px'}).animate({},800)
    

  $('.learning p').stop().css({}).animate({'width': '80%'},1200)
  $('.learning em').stop().css({'font-style': 'normal','text-align': 'end','width': '100%'}).animate({})
  $('.learning b').stop().css({'font-style': 'normal','text-align': 'end','padding-right': '10px'}).animate({})
  
  
  $('.basic p').stop().css({}).animate({'width': '80%'},1200)
  $('.basic em').stop().css({'font-style': 'normal','text-align': 'end','width': '100%'}).animate({})
  $('.basic b').stop().css({'font-style': 'normal','text-align': 'end','padding-right': '10px'}).animate({})

  $('.intermediate p').stop().css({}).animate({'width': '40%'},1200)
  $('.intermediate em').stop().css({'font-style': 'normal','text-align': 'end','width': '100%'}).animate({})
  $('.intermediate b').stop().css({'font-style': 'normal','text-align': 'end','padding-right': '10px'}).animate({})

  $('.advanced p').stop().css({}).animate({'width': '40%'},1200)
  $('.advanced em').stop().css({'font-style': 'normal','text-align': 'end','width': '100%'}).animate({})
  $('.advanced b').stop().css({'font-style': 'normal','text-align': 'end','padding-right': '10px'}).animate({})

  $('.expert p').stop().css({}).animate({'width': '40%'},1200)
  $('.expert em').stop().css({'font-style': 'normal','text-align': 'end','width': '100%'}).animate({})
  $('.expert b').stop().css({'font-style': 'normal','text-align': 'end','padding-right': '10px'}).animate({})

  var cnt0 = 0;
  var cnt1 = 0;

    id0 = setInterval(count0Fn, 20);
    id1 = setInterval(count1Fn, 50);
    id2 = setInterval(count2Fn, 80);
    function count0Fn() {
      cnt0++;
      if (cnt0 > 80) {
        clearInterval(id0);
      } else { 
        $('.em80').text(cnt0);
        $('.em80').text(cnt0);
      };
    }
  
    function count1Fn() {
      cnt1++;
      if (cnt1 > 40) {
        clearInterval(id1);
      } else { 
        $('.em40').text(cnt1);       
        $('.em40').text(cnt1); 
        $('.em40').text(cnt1);
      };
    }


})

$('nav li').eq(3).click(function(){
  $('header').stop().animate({'top':'159px'},800)
  $('header nav ul').stop().css({'display':'flex'}).animate({},800)
  $('header nav ul').stop().css({'justify-content':'center'}).animate({},800)
  $('header nav ul').stop().css({'margin-left':'0px'}).animate({},800)
  $('header nav ul li').stop().css({'margin-left':'20px'}).animate({},800)

  $('.learning p').stop().css({}).animate({'width': '0%'},400)
  $('.basic p').stop().css({}).animate({'width': '0%'},400)
  $('.intermediate p').stop().css({}).animate({'width': '0%'},400)
  $('.advanced p').stop().css({}).animate({'width': '0%'},400)
  $('.expert p').stop().css({}).animate({'width': '0%'},400)
})




})//제이쿼리끝