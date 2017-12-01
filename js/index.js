$(function(){
    /***************导航栏内容**************/
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >= 40){
            $('.nav').css({top:'0'});
        }else{
            $('.nav').css({top:'40px'});
        }
    });

    $('.navword>li').mouseenter(function(){
        var i =  $('.navword>li').index(this);
         $('.navbox>ul>li span').eq(i).animate({'width':"100%"},300);
    }).mouseleave(function(){
         var i =  $('.navword>li').index(this);
         $('.navbox>ul>li span').eq(i).animate({'width':"0"},300);   
    });


    $('.navword>li').mouseenter(function(){
        var i =  $('.navword>li').index(this);
        if(i > 0){ 
            $('.nav-show>li').stop(true).slideUp();
            $('.nav-show>li').eq(i-1).stop(true).slideDown();
        }
    }).mouseleave(function(){
        $('.nav-show>li').stop(true).slideUp();
    });
    $('.nav-show>li').mouseenter(function(){
        var i =  $('.nav-show>li').index(this);
        $('.nav-show>li').eq(i).stop(true).slideDown();
    }).mouseleave(function(){
        var i =  $('.nav-show>li').index(this);
        $('.nav-show>li').eq(i).stop(true).slideUp();
    });
    
    /***************轮播图**************/
    var $Ul = $('.banner>ul');
    var fn = setInterval(autoScroll2(), 3000);
    $('.banner').mouseover(function () {
        clearInterval(fn);
    }).mouseout(function () {
       fn = setInterval(autoScroll2(), 3000);
    });
    function autoScroll2() {
        $Ul.stop().animate({ left: -300+"%"}, 1000, function () {
            $(this).css({ left: -200 +"%"}).find("li:first").appendTo(this);//ul向左移动，把移出的li放到最后，ul复原。
        });
    }

    $('.bf').click(function(){
        $('.banner>ul').stop(true,false).animate({ left: -300+"%"}, 500, function () {
            $(this).css({ left: -200+"%" }).find(".banner>ul>li:first").appendTo(this);//ul向左移动，把移出的li放到最后，ul复原。
        });
    });
    $('.br').click(function(){
        $('.banner>ul').stop(true,false).animate({ left: -100+"%"}, 500, function () {
            $(this).css({ left: -200+"%" }).find("li:last").prependTo(this);//ul向右移动，把移出的li放到最前，ul复原。
        });
    });


    /***************产品中心**************/
    $('.products-show').hover(function(){
        var i = $('.products-show').index(this);
        $('.products-show .texthover').eq(i).stop().animate({left:'0'},500);
        $('.products-show .showtext p i').eq(i).stop().animate({left:'30px'},500);
        $('.products-show .showtext b').eq(i).stop().animate({left:'60px'},500);
    },function(){
        var i = $('.products-show').index(this);
        $('.products-show .texthover').eq(i).stop().animate({left:'295px'},500);
        $('.products-show .showtext p i').eq(i).stop().animate({left:'100px'},500);
        $('.products-show .showtext b').eq(i).stop().animate({left:'30px'},500);
    });
    /***************企业证书图片切换**************/
    $('.p-left').click(function(){
        $('.credentials ul').append('<li class="p3"></li>');
        $('.credentials ul li').eq(1).css({'z-index':'2'}).stop().animate({top:'0px',left: '63px',width:'150px',height:'210px'},500);
        $('.credentials ul li').eq(2).css({'z-index':'3'}).stop().animate({top:'-30px',left: '174px',width:'212px',height:'297px'},500);
        $('.credentials ul li').eq(0).css({'z-index':'2'}).stop().animate({top:'0px',left: '334px'},500,function(){
            $(this).remove();
        });
    });
    $('.p-right').click(function(){
        $('.credentials ul li').eq(1).css({'z-index':'2'}).stop().animate({top:'0px',left: '334px',width:'150px',height:'210px'},500);
        $('.credentials ul li').eq(0).css({'z-index':'3'}).stop().animate({top:'-30px',left: '174px',width:'212px',height:'297px'},500);
        $('.credentials ul li').eq(2).css({'z-index':'1'}).stop().animate({top:'0px',left: '63px',width:'150px',height:'210px'},500,function(){
            $(this).remove();
        });
        $('.credentials ul').prepend('<li class="p1"></li>');
        
    });
    /***************产品优势图片切换**************/
    // function imgChange($Ul,LintentLeft,RintentLeft,starLeft) {
    //     var $Ul;
    //     var lIntentLeft;
    //     var rIntentLeft;
    //     var starLeft;
    //     $Ul.stop(true,false).animate({ left: lIntentLeft}, 500, function () {
    //         $(this).css({ left: starLeft}).find("li:first").appendTo(this);//ul向左移动，把移出的li放到最后，ul复原。
    //     });
    //     $Ul.stop(true,false).animate({ left: rIntentLeft}, 500, function () {
    //         $(this).css({ left: starLeft}).find("li:last").prependTo(this);//ul向右移动，把移出的li放到最前，ul复原。
    //     });
    // }

    
    $('.ad-left').click(function(){
         $('.advantage-banner ul').stop(true).animate({ left: "-1740px"}, 500, function () {
             $(this).css({ left: "-1160px" }).find(".banner>ul>li:first").appendTo(this);//ul向左移动，把移出的li放到最后，ul复原。
        });
    });
    $('.ad-right').click(function(){
        $('.advantage-banner>ul').stop(true).animate({ left: "-580px"}, 500, function () {
            $(this).css({ left: "-1160px"}).find("li:last").prependTo(this);//ul向右移动，把移出的li放到最前，ul复原。
        });
    });

    /***************宇锋案例见证**************/
    $('.caseshow ul li').hover(function(){
        var i = $('.caseshow ul li').index(this);
        $('.caseshow .compy').eq(i).stop(true).css({backgroundColor:"rgb(237,179,15)"});
        $('.caseshow .compy i').eq(i).stop(true).css({"background-image":"url(images/case_quotes2.png)"});
    }, function(){
        var i = $('.caseshow ul li').index(this);
        $('.caseshow .compy').eq(i).css({backgroundColor:"rgb(27,77,166)"});
        $('.caseshow .compy i').eq(i).stop(true).css({"background-image":"url(images/case_quotes.png"});
    });

    /***************panter**************/
    $('.pa-left').click(function(){
        $('.panter-box ul').stop(true).animate({ left: "-1120px"}, 700, function () {
            $(this).css({ left: "-535px" }).find(".panter-box>ul>li:first").appendTo(this);//ul向左移动，把移出的li放到最后，ul复原。
       });
   });
   $('.pa-right').click(function(){
       $('.panter-box ul').stop(true).animate({ left: "0px"}, 700, function () {
           $(this).css({ left: "-535px"}).find(".panter-box>ul>li:last").prependTo(this);//ul向右移动，把移出的li放到最前，ul复原。
       });
   });

    /***************news**************/
    $('.news-box').hover(function(){
        var i = $('.news-box').index(this);
        $('.news-box .img').eq(i).stop(true).animate({width:'305px',height:'220px',top:'0',left:'0'},500);
        if(i>1){
            $('.news-box .img').eq(i).stop(true).animate({width:'305px',height:'220px',top:'0',left:'305'},500);
        }
        $('.news-box .text i').eq(i).stop().animate({left:'20px'},500);
        $('.news-box .text span').eq(i).stop().animate({left:'75px'},500);
    },function(){
        var i = $('.news-box').index(this);
        $('.news-box .img').eq(i).stop(true).animate({width:'0',height:'0',top:'132.5px',left:'140px'},500);
        if(i>1){
            $('.news-box .img').eq(i).stop(true).animate({width:'0',height:'0',top:'132.5px',left:'445px'},500);
        }
        $('.news-box .text i').eq(i).stop().animate({left:'75px'},500);
        $('.news-box .text span').eq(i).stop().animate({left:'20px'},500);
    });
});

