$(function() {
    
  //Верхнее Аbout
  
$('.about').on('click',function(){
$('#ul').slideToggle(250);
  
});
  
//Коммент слайдер

  var triangleLeft = $('#triangleLeft');
  var triangleRight = $('#triangleRight');
  var range = $('.rangeInput');
  var widthComm = $('.widthComments');
  var t1 = $('#t1');
  var t2 = $('#t2');
  var t3 = $('#t3');
  var t4 = $('#t4');
  var t5 = $('#e5');
  var t6 = $('#t6');
  var t7 = $('#t7');
  var t8 = $('#t8');
  var t9 = $('#t9');
  var t10 = $('#t10');
  var t11 = $('#t11');
  var t12 = $('#t12');
  var t13 = $('#t13');
  var speed = 2;
  var s = range.attr('value');
  var r = parseInt(s);
  


  //Ползунок с комментами

  $('.rangeInput').on('mousemove', function(){
    var that = $(this);
    var ew = range.val();
    console.log(ew);
    r = ew;

    if(r == 2){
      triangleLeft.attr('style','text-shadow: 0 0 1vh #8ed0ff;');
    }else{
      triangleLeft.attr('style','text-shadow: 0 0 0vh #8ed0ff;');
    }

      if(r == 110){
        triangleRight.attr('style','text-shadow: 0 0 1vh #8ed0ff;');
      }else{
        triangleRight.attr('style','text-shadow: 0 0 0vh #8ed0ff;');
      }
    if(r>1 && r<3){
      r = 2;
      widthComm.css('left','42%');
      widthComm.children().removeClass('scaleUp');
      t3.removeClass('scaleDown');
      t2.addClass('scaleDown');
      t1.addClass('scaleUp'); 
      t1.removeClass('scaleDown');
      triangleLeft.one('click', function() {
        r = 110;
        range.val(110);
        widthComm.animate({left: '-403%'},speed);
        t12.removeClass('scaleUp');
        t1.removeClass('scaleUp');
        t11.removeClass('scaleDown');
        t12.addClass('scaleDown');
        t13.addClass('scaleUp'); 
        t13.removeClass('scaleDown');
      });
    }else if (r>3 && r<12){
      r = 11;
      widthComm.css('left','5%');
      widthComm.children().removeClass('scaleUp');
      t4.removeClass('scaleDown');
      t3.addClass('scaleDown');
      t2.addClass('scaleUp'); 
      t2.removeClass('scaleDown');
    }else if (r>12 && r<21){
      r = 20;
      widthComm.css('left','-32%');
      widthComm.children().removeClass('scaleUp');
      t5.removeClass('scaleDown');
      t4.addClass('scaleDown');
      t3.addClass('scaleUp'); 
      t3.removeClass('scaleDown');
    }else if (r>21 && r<30){
      r = 29;
      widthComm.css('left','-69%');
      widthComm.children().removeClass('scaleUp');
      t6.removeClass('scaleDown');
      t5.addClass('scaleDown');
      t4.addClass('scaleUp');  
      t4.removeClass('scaleDown');
    }else if (r>30 && r<39){
      r = 38;
      widthComm.css('left','-107%');
      widthComm.children().removeClass('scaleUp');
      t6.addClass('scaleDown');
      t7.removeClass('scaleDown');
      t5.addClass('scaleUp');
      t5.removeClass('scaleDown');
    }else if (r>39 && r<48){
      r = 47;
      widthComm.css('left','-144%');
      widthComm.children().removeClass('scaleUp');
      t6.addClass('scaleUp');
      t6.removeClass('scaleDown');
      t7.addClass('scaleDown');
    }else if (r>48 && r<57){
      r = 56;
      widthComm.css('left','-180%');
      widthComm.children().removeClass('scaleUp');
      t7.addClass('scaleUp');
      t7.removeClass('scaleDown');
      t8.addClass('scaleDown');
    }else if (r>57 && r<66){
      r = 65;
      widthComm.css('left','-218%');
      widthComm.children().removeClass('scaleUp');
      t7.addClass('scaleDown');
      t8.addClass('scaleUp');
      t8.removeClass('scaleDown');
    }else if (r>66 && r<75){
      r = 74;
      widthComm.css('left','-255%');
      widthComm.children().removeClass('scaleUp');
      t7.removeClass('scaleDown');
      t8.addClass('scaleDown');
      t9.addClass('scaleUp');
      t9.removeClass('scaleDown');
    }else if (r>75 && r<84){
      r = 83;
      widthComm.css('left','-292%');
      widthComm.children().removeClass('scaleUp');
      t8.removeClass('scaleDown');
      t9.addClass('scaleDown');
      t10.addClass('scaleUp');
      t10.removeClass('scaleDown');
    }else if (r>84 && r<93){
      r = 92;
      widthComm.css('left','-330%');
      widthComm.children().removeClass('scaleUp');
      t9.removeClass('scaleDown');
      t10.addClass('scaleDown');
      t11.addClass('scaleUp');
      t11.removeClass('scaleDown');
    }else if (r>93 && r<102){
      r = 101;
      widthComm.css('left','-367%');
      widthComm.children().removeClass('scaleUp');
      t10.removeClass('scaleDown');
      t11.addClass('scaleDown');
      t12.addClass('scaleUp');
      t12.removeClass('scaleDown');
    }else if (r>102 && r<111){
      r = 110;
      widthComm.css('left','-403%');
      widthComm.children().removeClass('scaleUp');
      t11.removeClass('scaleDown');
      t12.addClass('scaleDown');
      t13.addClass('scaleUp'); 
      t13.removeClass('scaleDown');
      
      triangleRight.one('click', function() {
        widthComm.animate({left: '42%'},speed);
        r = 2;
        range.val(2);
        t2.removeClass('scaleUp');
        t13.removeClass('scaleUp');
        t3.removeClass('scaleDown');
        t2.addClass('scaleDown');
        t1.addClass('scaleUp'); 
        t1.removeClass('scaleDown');
      });
    }

  });





  //Левая стрелочка

  if(r == 56){
    t7.addClass('scaleUp');
    }
  
  
  
  triangleLeft.on('click', function() {
    
    if(range.attr('value') != 2){
      r -= 9;
    }
    console.log(r);
    range.val(r)
    
   if(r == 2){
    widthComm.animate({left: '42%'},speed);
    t2.removeClass('scaleUp');
    t3.removeClass('scaleDown');
    t2.addClass('scaleDown');
    t1.addClass('scaleUp'); 
    t1.removeClass('scaleDown');
    triangleLeft.one('click', function() {
      r = 110;
      range.val(110);
      widthComm.animate({left: '-403%'},speed);
      t12.removeClass('scaleUp');
      t1.removeClass('scaleUp');
      t11.removeClass('scaleDown');
      t12.addClass('scaleDown');
      t13.addClass('scaleUp'); 
      t13.removeClass('scaleDown');
    });
   } 

    
   if(r == 11){
    widthComm.animate({left: '5%'},speed);
    t3.removeClass('scaleUp');
    t4.removeClass('scaleDown');
    t3.addClass('scaleDown');
    t2.addClass('scaleUp'); 
    t2.removeClass('scaleDown');
   } 
    

    if(r == 20){
      
    widthComm.animate({left: '-32%'},speed);
    t4.removeClass('scaleUp');
    t5.removeClass('scaleDown');
    t4.addClass('scaleDown');
    t3.addClass('scaleUp'); 
    t3.removeClass('scaleDown');
    }
    
    

    
    
    if(r == 29){
     widthComm.animate({left: '-69%'},speed);
     t5.removeClass('scaleUp');
     t6.removeClass('scaleDown');
     t5.addClass('scaleDown');
     t4.addClass('scaleUp');  
     t4.removeClass('scaleDown');
    }
    
    
    
    
    
    if(r == 38){
    widthComm.animate({left: '-107%'},speed);
    t6.removeClass('scaleUp');
    t6.addClass('scaleDown');
    t7.removeClass('scaleDown');
    t5.addClass('scaleUp');
    t5.removeClass('scaleDown');
    }
    
    
    
    
    
    if(r == 47) {
    widthComm.animate({left: '-144%'},speed);
    t7.removeClass('scaleUp');
    t6.addClass('scaleUp');
    t6.removeClass('scaleDown');
    t7.addClass('scaleDown');
    }
   
    
    if(r == 56){
    widthComm.animate({left: '-181%'},speed);
    t8.removeClass('scaleUp');
    t7.addClass('scaleUp');
    t7.removeClass('scaleDown');
    t8.addClass('scaleDown');
    }
    
    
    if (r == 101){
    widthComm.animate({left: '-367%'},speed);
    t13.removeClass('scaleUp');
    t13.removeClass('scaleDown');
    t12.removeClass('scaleDown');
    t13.addClass('scaleDown');
    t12.addClass('scaleUp');
   }
    
   
    if (r == 92){
    widthComm.animate({left: '-330%'},speed);
    t12.removeClass('scaleUp');
    t11.addClass('scaleUp');
    t12.addClass('scaleDown');
    t11.removeClass('scaleDown');
    }
    
    
    if (r == 83){
    widthComm.animate({left: '-292%'},speed);
    t11.removeClass('scaleUp');
    t10.addClass('scaleUp');
    t11.addClass('scaleDown');
    t10.removeClass('scaleDown');
    }
    
    if (r == 74){
    widthComm.animate({left: '-255%'},speed);
    t10.removeClass('scaleUp');
    t9.addClass('scaleUp');
    t10.addClass('scaleDown');
    t9.removeClass('scaleDown');
    }
    
    
    if (r == 65){
    widthComm.animate({left: '-218%'},speed);
    t9.removeClass('scaleUp');
    t8.addClass('scaleUp');
    t9.addClass('scaleDown');
    t8.removeClass('scaleDown');
    }
    
    
    
  });
  
  
  
  //Правая стрелочка
  
  triangleRight.on('click', function() {
    
    if(range.attr('value') != 110){
      r += 9;
    }
    
    range.val(r) 
    
    

    if(r == 110){
    widthComm.animate({left: '-403%'},speed);
    t12.removeClass('scaleUp');
    t11.removeClass('scaleDown');
    t12.addClass('scaleDown');
    t13.addClass('scaleUp'); 
    t13.removeClass('scaleDown');
    triangleRight.one('click', function() {
      widthComm.animate({left: '42%'},speed);
      r = 2;
      range.val(2);
      t2.removeClass('scaleUp');
      t13.removeClass('scaleUp');
      t3.removeClass('scaleDown');
      t2.addClass('scaleDown');
      t1.addClass('scaleUp'); 
      t1.removeClass('scaleDown');
    });
    }
    
   
    if(r == 101){
    widthComm.animate({left: '-367%'},speed);
    t11.removeClass('scaleUp');
    t10.removeClass('scaleDown');
    t11.addClass('scaleDown');
    t12.addClass('scaleUp');
    t12.removeClass('scaleDown');
    }
    
    
    if(r == 92){
    widthComm.animate({left: '-330%'},speed);
    t10.removeClass('scaleUp');
    t9.removeClass('scaleDown');
    t10.addClass('scaleDown');
    t11.addClass('scaleUp');
    t11.removeClass('scaleDown');
    }
    
    
    
    if (r == 83){
    widthComm.animate({left: '-292%'},speed);
    t9.removeClass('scaleUp');
    t8.removeClass('scaleDown');
    t9.addClass('scaleDown');
    t10.addClass('scaleUp');
    t10.removeClass('scaleDown');
    }
    
    
    
    if (r == 74){
    widthComm.animate({left: '-255%'},speed);
    t8.removeClass('scaleUp');
    t7.removeClass('scaleDown');
    t8.addClass('scaleDown');
    t9.addClass('scaleUp');
    t9.removeClass('scaleDown');
    }
    
    
    
    if(r == 65){
    widthComm.animate({left: '-218%'},speed);
    t7.removeClass('scaleUp');
    t7.addClass('scaleDown');
    t8.addClass('scaleUp');
    t8.removeClass('scaleDown');
    }
    
    if (r == 11){
    widthComm.animate({left: '5%'},speed);
    t1.removeClass('scaleUp');
    t1.addClass('scaleDown');
    t2.removeClass('scaleDown');
    t2.addClass('scaleUp');
    }
    
   
    if (r == 20){
    widthComm.animate({left: '-32%'},speed);
    t2.removeClass('scaleUp');
    t2.addClass('scaleDown');
    t3.removeClass('scaleDown');
    t3.addClass('scaleUp');
    }
    
    
    if(r == 29){
    widthComm.animate({left: '-69%'},speed);
    t3.removeClass('scaleUp');
    t3.addClass('scaleDown');
    t4.removeClass('scaleDown');
    t4.addClass('scaleUp');
    }
    
    
    if(r == 38){
    widthComm.animate({left: '-107%'},speed);
    t4.removeClass('scaleUp');
    t4.addClass('scaleDown');
    t5.removeClass('scaleDown');
    t5.addClass('scaleUp');
    }
    
   
    if(r == 47){
    widthComm.animate({left: '-144%'},speed);
    t5.removeClass('scaleUp');
    t5.addClass('scaleDown');
    t6.removeClass('scaleDown');
    t6.addClass('scaleUp');
    }
   
    if(r == 56){
    widthComm.animate({left: '-181%'},speed);
    t6.removeClass('scaleUp');
    t6.addClass('scaleDown');
    t7.addClass('scaleUp');
    t7.removeClass('scaleDown');
    }

  });



    //Скролл слева

  var windowScroll = $(window);
  var documentScroll = $(document).height() - $(window).height();
  var progBar = $('.progressBar');
  var speedShow = 750;

  $(window).scroll(function(){
    var per = windowScroll.scrollTop()/documentScroll*101;
    $('.fillBar').css('top',''+per+'%');
    var perRound = Math.floor(per);
    $('.progressBar span').text(perRound+' '+'%');
    var parseSpan = parseInt($('.progressBar span').html());
    if(parseSpan > 99){
        $('.progressBar span').text('100 %');
       }
    if(parseSpan >= 0){
      $('.progressBar i img').css('top','22.9%');
    }
    if(parseSpan >= 10){
      $('.progressBar i img').css('top','22.7%');
    }
    if(parseSpan >= 100){
      $('.progressBar i img').css('top','22.4%');
    }
    if(parseSpan > 41){
      $('.blurSideScreen').fadeIn(speedShow);
    }
    if(parseSpan > 45){
      $('.blurTrust').fadeIn(speedShow);
    }
    if(parseSpan > 5){
      $('.blurOne').fadeIn(speedShow);
      $('.text1 span').fadeOut(speedShow);
      setTimeout(function() {
      $('.text1 h1').css('opacity','1');
      },speedShow+50);
    }
    if(parseSpan > 9){
      $('.blurTwo').fadeIn(speedShow);
      $('.text2 span').fadeOut(speedShow);
      setTimeout(function() {
        $('.text2 h1').css('opacity','1');
        },speedShow+50);
    }if(parseSpan > 13){
      $('.blurThree').fadeIn(speedShow);
      $('.text3 span').fadeOut(speedShow);
      setTimeout(function() {
        $('.text3 h1').css('opacity','1');
        },speedShow+50);
    }if(parseSpan > 18){
      $('.blurFour').fadeIn(speedShow+150);
      $('.text4 span').fadeOut(speedShow);
      setTimeout(function() {
        $('.text4 h1').css('opacity','1');
        },speedShow+50);
    }if(parseSpan > 26){
      $('.textDeep').css('color','#002cf8');
      $('.arrowsDeeper').css('margin','0');
      $('.arrowsDeeper i').css('opacity','1');
    }
    if(parseSpan > 49){
      $('.weText').css('color','#002cf8');
      $('.hereArrows').css('margin','0');
      $('.hereArrows i').css('opacity','1');
    }if(parseSpan > 54){
      $('.alexCeo').css({'opacity':'1'});
      $('.alexName').css('box-shadow','0px 0px 6vh #00ffff');
      $('.people').css({
        'filter':'grayscale(0)',
        'opacity': '1'});
      $('.people2').css({
        'filter':'grayscale(0)',
        'opacity': '1'});
    }if(parseSpan > 57){
      $('.vladCeo').css({'opacity':'1'});
      $('.vladName').css('box-shadow','0px 0px 6vh #00ffff');
    }if(parseSpan > 58){
      $('.sergCeo').css({'opacity':'1'});
      $('.sergName').css('box-shadow','0px 0px 6vh #00ffff');
    }if(parseSpan > 60){
      $('.danCeo').css({'opacity':'1'});
      $('.danName').css('box-shadow','0px 0px 6vh #00ffff');
    }if(parseSpan > 62){
      $('.maxCeo').css({'opacity':'1'});
      $('.maxName').css('box-shadow','0px 0px 6vh #00ffff');
    }if(parseSpan > 65){
      $('.kardCeo').css({'opacity':'1'});
      $('.kardName').css('box-shadow','0px 0px 6vh #00ffff');
    }if(parseSpan > 66){
      $('.oksCeo').css({'opacity':'1'});
      $('.oksName').css('box-shadow','0px 0px 6vh #00ffff');
    }if(parseSpan > 69){
      $('.vyachCeo').css({'opacity':'1'});
      $('.vyachName').css('box-shadow','0px 0px 6vh #00ffff');
    }if(parseSpan > 70){
      $('.olenCeo').css({'opacity':'1'});
      $('.olenName').css('box-shadow','0px 0px 6vh #00ffff');
    }if(parseSpan > 73){
      $('.vasCeo').css({'opacity':'1'});
      $('.vasName').css('box-shadow','0px 0px 6vh #00ffff');
    }
    if(parseSpan > 76){
      $('.letsgoDeeper').css({'text-shadow':'0 0px 5vh #006ed6, 0 0px 4vh #006ed6'});
      $('.sectionBottom i:nth-child(2)').delay(50).css({top: '91%'}).css('opacity','1');
      $('.sectionBottom i:nth-child(3)').css({top: '92%'}).css('opacity','1');
      $('.blurDeeper').fadeIn(speedShow);
    }if(parseSpan > 89){
      $('.footText').css({'text-shadow':'0 0 6vh #00d2ff, 0 0 5vh #00d2ff'});
      $('.round').css('opacity','1');
      $('.roundBlur').css('opacity','1');
    }
  });
  
  //Модальное окно + Слайдер

  var modalRight = $('#modalRight');
  var modalLeft = $('#modalLeft');
  
   modalRight.on('click', function(){
      var imageMain = $('.modalImage img.rob');
      var index = $('.modalImage img.rob').index();
      var indexPlus = index + 1;
      var childrenPlus = $('.modalImage img').eq(indexPlus);
      imageMain.hide(1);
      imageMain.removeClass('rob')
      
      if(indexPlus == ($('.modalImage img:last').index()+1)) {
		$('.modalImage img').eq(0).show(1);
		$('.modalImage img').eq(0).addClass('rob');
      } else {
		childrenPlus.show(1);
		childrenPlus.addClass('rob');
		}
    });
  
    modalLeft.on('click', function(){
    
        var imageMain = $('.modalImage img.rob');
        var index = $('.modalImage img.rob').index();
        var indexPlus = index - 1;
        var childrenPlus = $('.modalImage img').eq(indexPlus);
        imageMain.hide(1);
        $('.modalImage img').hide(1);
        imageMain.removeClass('rob');
        childrenPlus.show(1);
        childrenPlus.addClass('rob');
    });

    $('.ourSite li').on('click', function(openImg) {
      var that = $(this).html();
      $('.openModal').show('clip',500);
      $('.modalImage').append('<li>'+that+'</li>');
     
      var modalDiv = $('.openModal>div');
      var set = modalDiv.css('left','0%');
      var ourImage = $('.modalImage img');
      ourImage.eq(0).addClass('rob');
      
  
        $('.closeTab i').on('click', function() {
         $('.openModal').hide('clip',500).delay(200);
          $('.modalImage div').removeClass('rob');
          index = 0;
          setTimeout(function(){
          $('.modalImage').html('');
          },500);
        });
    
  
        //Карточки
  /*
    var cards = $('.modalImage img');
    
      function card3D (event){
        var cardsY = event.offsetY;
        var cardsX = event.offsetX;
        var cardHalhHeight = cards.height() / 2;
        var cardHalhWidth = cards.width() / 2;
        cards.css({transform: 'rotateX('+-(cardsY - cardHalhHeight)/60+'deg) rotateY('+(cardsX - cardHalhWidth)/60+'deg)'})
      }
    
      cards.mousemove(card3D);*/
    });
    
    //Web
    var modalRightTwo = $('#modalRightTwo');
    var modalLeftTwo = $('#modalLeftTwo');

    modalRightTwo.on('click', function(){
    
      var imageMain = $('.modalWebImage img.rob');
      var index = $('.modalWebImage img.rob').index();
      var indexPlus = index + 1;
      var childrenPlus = $('.modalWebImage img').eq(indexPlus);
      imageMain.hide(1);
      imageMain.removeClass('rob')
      
      if(indexPlus == ($('.modalWebImage img:last').index()+1)) {
		$('.modalWebImage img').eq(0).show(1);
		$('.modalWebImage img').eq(0).addClass('rob');
      } else {
		childrenPlus.show(1);
		childrenPlus.addClass('rob');
		}
    });
  
    modalLeftTwo.on('click', function(){
    
        var imageMain = $('.modalWebImage img.rob');
        var index = $('.modalWebImage img.rob').index();
        var indexPlus = index - 1;
        var childrenPlus = $('.modalWebImage img').eq(indexPlus);
        imageMain.hide(1);
        $('.modalWebImage img').hide(1);
        imageMain.removeClass('rob');
        childrenPlus.show(1);
        childrenPlus.addClass('rob');
    });
    

    $('.webDevelopment li').on('click', function(openImg) {
      var that = $(this).html();
      $('.openWebModal').show('clip',500);
      $('.modalWebImage').append('<li>'+that+'</li>');
     
      var modalDiv = $('.openWebModal>div');
      var set = modalDiv.css('left','0%');
      var ourImage = $('.modalWebImage img');
      ourImage.eq(0).addClass('rob');
      
  
        $('.closeTab i').on('click', function() {
         $('.openWebModal').hide('clip',500).delay(200);
          $('.modalWebImage div').removeClass('rob');
          index = 0;
          setTimeout(function(){
          $('.modalWebImage').html('');
          },500);
        });
    
  
        //Карточки
  /*
    var cards = $('.modalImage img');
    
      function card3D (event){
        var cardsY = event.offsetY;
        var cardsX = event.offsetX;
        var cardHalhHeight = cards.height() / 2;
        var cardHalhWidth = cards.width() / 2;
        cards.css({transform: 'rotateX('+-(cardsY - cardHalhHeight)/60+'deg) rotateY('+(cardsX - cardHalhWidth)/60+'deg)'})
      }
    
      cards.mousemove(card3D);*/
    });



    //Design

    var modalRightTwo = $('#modalRightThree');
    var modalLeftTwo = $('#modalLeftThree');

    modalRightTwo.on('click', function(){
    
      var imageMain = $('.modalDesignImage img.rob');
      var index = $('.modalDesignImage img.rob').index();
      var indexPlus = index + 1;
      var childrenPlus = $('.modalDesignImage img').eq(indexPlus);
      imageMain.hide(1);
      imageMain.removeClass('rob')
      
      if(indexPlus == ($('.modalDesignImage img:last').index()+1)) {
		$('.modalDesignImage img').eq(0).show(1);
		$('.modalDesignImage img').eq(0).addClass('rob');
      } else {
		childrenPlus.show(1);
		childrenPlus.addClass('rob');
		}
    });
  
    modalLeftTwo.on('click', function(){
    
        var imageMain = $('.modalDesignImage img.rob');
        var index = $('.modalDesignImage img.rob').index();
        var indexPlus = index - 1;
        var childrenPlus = $('.modalDesignImage img').eq(indexPlus);
        imageMain.hide(1);
        $('.modalDesignImage img').hide(1);
        imageMain.removeClass('rob');
        childrenPlus.show(1);
        childrenPlus.addClass('rob');
    });
    

    $('.designDevelopment li').on('click', function(openImg) {
      var that = $(this).html();
      $('.openDesignModal').show('clip',500);
      $('.modalDesignImage').append('<li>'+that+'</li>');
     
      var modalDiv = $('.openDesignModal>div');
      var set = modalDiv.css('left','0%');
      var ourImage = $('.modalDesignImage img');
      ourImage.eq(0).addClass('rob');
      
  
        $('.closeTab i').on('click', function() {
         $('.openDesignModal').hide('clip',500).delay(200);
          $('.modalDesignImage div').removeClass('rob');
          index = 0;
          setTimeout(function(){
          $('.modalDesignImage').html('');
          },500);
        });
    
  
        //Карточки
  /*
    var cards = $('.modalImage img');
    
      function card3D (event){
        var cardsY = event.offsetY;
        var cardsX = event.offsetX;
        var cardHalhHeight = cards.height() / 2;
        var cardHalhWidth = cards.width() / 2;
        cards.css({transform: 'rotateX('+-(cardsY - cardHalhHeight)/60+'deg) rotateY('+(cardsX - cardHalhWidth)/60+'deg)'})
      }
    
      cards.mousemove(card3D);*/
    });
  



  var mobileTable = $('.mobile');
  var webTable = $('.web');
  var designTable = $('.design');

  mobileTable.on('click',function(){
    var that = $(this);
    that.css({
      background: '#0077e7',
      padding: '4% 5%'
    });
    webTable.css({
      background: 'transparent',
      padding: '4% 0%'
    });

    designTable.css({
      background: 'transparent',
      padding: '4% 0%'
    });
    $('.ourSite').fadeIn(1000);
    $('.webDevelopment').fadeOut(500);
    $('.designDevelopment').fadeOut(500);
  });


  
  webTable.on('click',function(){
    var that = $(this);
    that.css({
      background: '#0077e7',
      padding: '4% 5%'
    });
    mobileTable.css({
      background: 'transparent',
      padding: '4% 0%'
    });

    designTable.css({
      background: 'transparent',
      padding: '4% 0%'
    });

    $('.webDevelopment').fadeIn(1000);
    $('.ourSite').fadeOut(500);
    $('.designDevelopment').fadeOut(500);
  });



  designTable.on('click',function(){
    var that = $(this);
    that.css({
      background: '#0077e7',
      padding: '4% 5%'
    });
    webTable.css({
      background: 'transparent',
      padding: '4% 0%'
    });

    mobileTable.css({
      background: 'transparent',
      padding: '4% 0%'
    });
    $('.designDevelopment').fadeIn(1000);
    $('.webDevelopment').fadeOut(500);
    $('.ourSite').fadeOut(500);
  })
  
  $('.areaFooter button').on('click',function(){
    alert('You send message');
    var names = $('#name').val();
    var surnames = $('#surname').val();
    var email = $('#email').val();
    var textArr = $('.textArea').val();
    var templateParams = {
      name: names+' '+surnames,
      email: email,
      text: textArr
  };
   
  emailjs.send('gmail', 'template_lcq1zpqw', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
  });
});

