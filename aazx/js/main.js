$(function(){
    //登录
    $(".login").on("click", function (){
        $(".zhezhao").css("display","block")
        $(".htmleaf-container").removeClass("list2").addClass("list")
    })
    $(".logins").on("click", function (){
        $(".zhezhao_register").css("display","none")
        $(".zhezhao").css("display","block")
    })
    $(".register").on("click", function (){
        $(".zhezhao_register").css("display","block")
        $(".htmleaf-container").removeClass("list2").addClass("list")
    })
    $(".loginin").on("click", function (){
        $(".zhezhao_register").css("display","block")
        $(".htmleaf-container").removeClass("list2").addClass("list")
    })
    $(".close").on("click", function (){
        $(".htmleaf-container").removeClass("list").addClass("list2").delay(50);
        $(".zhezhao").css("display","none");
        $(".zhezhao_register").css("display","none");
    })

    //主页视屏播放
    $(".backgroundImage").on("click",function(){
        $(".videoBlack").css("display","block")
        var imageSrc=$(this).attr("src-data")
        $(".video").attr("src",imageSrc)
        $(".video")[0].play()
    })
    $(".backgroundImage").on("mouseenter",function(){
        $(this).addClass("PlayBig")
    })
    $(".backgroundImage").on("mouseleave",function(){
        $(this).removeClass("PlayBig")
    })
    $(".videoBlack").on("click",function(){
        $(this).css("display","none")
        $(".video")[0].pause()
    })
    //下拉
    $(".liss").on("mouseenter",function(){
        $(this).children("ul").css("display","block")
    })
    $(".liss").on("mouseleave",function(){
        $(this).children("ul").css("display","none")
    })
    //广告位
    var i=1;
    setInterval(function(){
        changeImg()
    },2000)
    function changeImg(){
             i=i+1;
             if(i>=7){
                 i=1
             }
            $(".Advertisement img").attr("src","img/product"+i+".jpg")

    }
    changeImg();

    //shop页的刷选
    $(":radio").click(function(){
        var data=$(this).val()
        checkShops(data)
    });
    function checkShops(value){
        $(".single-product-area .row div.col-md-3").each(function(){
            if($(this).hasClass(value)){
                $(this).css("display","block")
            }else{
                $(this).css("display","none")
            }
        });
    }

    //knowledge页的选项卡
   var li=$(".knowledge_box .col-md-2 ul li");
    li.on("click",function(){
        var index = $(this).index();
        $(this).addClass('selected').siblings().removeClass('selected');
        $(".knowledge_box .col-md-10 > .knowledges").eq(index).show().siblings().hide();
    })

//     //分页
//     getPage(1);
//     //翻页
//     function getPage(pn){
//         var dataCount=10;//总数据条数
//         var pageSize=6;//每页显示条数
//         var pageCount= Math.ceil(dataCount / pageSize);//总页数
//         if(pn==0||pn>pageCount){
//             return;
//         }
//         var ul=$(".dongtai");
//         ul.empty();
//         //console.log(pageCount+"..."+pn)
//         paintPage(pageCount,pn);   //绘制页码
//         var startPage = pageSize * (pn - 1);
//
//         if (pageCount == 1) {     // 当只有一页时
//             for (var j = 0; j < dataCount; j++) {
//                 var e="<li><div class=\"row\"><div class=\"col1\"><span class=\"day\">20</span><span class=\"date\">2017-11</span></div><div class=\"col2\"><h4><a href=\"news_sec.html\">2017年华润·深圳南山半程马拉松赛成功举行</a></h4><p>11月19日，2017华润·深圳南山半程马拉松赛(以下简称“南山半马”)于上午8点在中国华润大厦“春笋”前正式开跑。对集团各业务板块未来融入物联网经济进行了前瞻性探讨和可行性研.比赛由中国田径协会、深圳南山区政府、华润集团共同主办，1.6万名选手参加了..." +
//                     "<a href=\"news_sec.html\"><img src=\"img/more.png\" style=\"width: 18px;height: 10px\"></a></p></div></div></li>";
// //                var e="<li><a href=\"content.html\"><img src=\"images/lbt.jpg\"></a><p><span>跟着我一起摇摆"+j+"</span></p></li>";
//                 ul.append(e);
//             }
//         }else {      // 当超过一页时
//             var e="";
//             var endPage = pn<pageCount?pageSize * pn:dataCount;
//             for (var j = startPage; j < endPage; j++) {
//                 var e="<li><div class=\"row\"><div class=\"col1\"><span class=\"day\">20</span><span class=\"date\">2017-11</span></div><div class=\"col2\"><h4><a href=\"news_sec.html\">2017年华润·深圳南山半程马拉松赛成功举行</a></h4><p>11月19日，2017华润·深圳南山半程马拉松赛(以下简称“南山半马”)于上午8点在中国华润大厦“春笋”前正式开跑。对集团各业务板块未来融入物联网经济进行了前瞻性探讨和可行性研.比赛由中国田径协会、深圳南山区政府、华润集团共同主办，1.6万名选手参加了..." +
//                     "<a href=\"news_sec.html\"><img src=\"img/more.png\" style=\"width: 18px;height: 10px\"></a></p></div></div></li>";
//                 ul.append(e);
//             }
//         }
//     }
//
//     //绘制页码
//     function paintPage(number,currNum)  //number 总页数,currNum 当前页
//     {
//         var pageUl=$(".fenye");
//         pageUl.empty();
//         var ulDetail="";
//
//         if(number==1){
//             ulDetail= "<li class=\"prev\"><a href=\"javascript:void(0)\">上一页</a></li>"+
//                 "<li class=\"numb choose\"><a href=\"javascript:getPage(1)\">1</a></li>"+
//                 "<li class=\"next\"><a href=\"javascript:void(0)\">下一页</a></li>";
//         }else if(number==2){
//             ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage(1)\">上一页</a></li>"+
//                 "<li class=\"numb"+choosele(currNum,1)+"\"><a href=\"javascript:getPage(1)\">1</a></li>"+
//                 "<li class=\"numb"+choosele(currNum,2)+"\"><a href=\"javascript:getPage(2)\">2</a></li>"+
//                 "<li class=\"next\"><a href=\"javascript:getPage(2)\">下一页</a></li>";
//         }else if(number==3){
//             ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage("+parseInt(currNum-1)+")\">上一页</a></li>"+
//                 "<li class=\"numb"+choosele(currNum,1)+"\"><a href=\"javascript:getPage(1)\">1</a></li>"+
//                 "<li class=\"numb"+choosele(currNum,2)+"\"><a href=\"javascript:getPage(2)\">2</a></li>"+
//                 "<li class=\"numb"+choosele(currNum,3)+"\"><a href=\"javascript:getPage(3)\">3</a></li>"+
//                 "<li class=\"next\"><a href=\"javascript:getPage("+parseInt(currNum+1)+")\">下一页</a></li>";
//         }else if(number==currNum&&currNum>3){
//             ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage("+parseInt(currNum-1)+")\">上一页</a></li>"+
//                 "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currNum-2)+")\">"+parseInt(currNum-2)+"</a></li>"+
//                 "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currNum-1)+")\">"+parseInt(currNum-1)+"</a></li>"+
//                 "<li class=\"numb choose\"><a href=\"javascript:getPage("+currNum+")\">"+currNum+"</a></li>"+
//                 "<li class=\"next\"><a href=\"javascript:getPage("+currNum+")\">下一页</a></li>";
//         }else if(currNum==1&&number>3){
//             ulDetail= "<li class=\"prev\"><a href=\"javascript:void(0)\">上一页</a></li>"+
//                 "<li class=\"numb choose\"><a href=\"javascript:void(0)\">1</a></li>"+
//                 "<li class=\"numb\"><a href=\"javascript:getPage(2)\">2</a></li>"+
//                 "<li class=\"numb\"><a href=\"javascript:getPage(3)\">3</a></li>"+
//                 "<li class=\"next\"><a href=\"javascript:getPage(2)\">下一页</a></li>";
//         }else{
//             ulDetail= "<li class=\"prev\"><a href=\"javascript:getPage("+parseInt(currNum-1)+")\">上一页</a></li>"+
//                 "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currNum-1)+")\">"+parseInt(currNum-1)+"</a></li>"+
//                 "<li class=\"numb choose\"><a href=\"javascript:getPage("+currNum+")\">"+currNum+"</a></li>"+
//                 "<li class=\"numb\"><a href=\"javascript:getPage("+parseInt(currNum+1)+")\">"+parseInt(currNum+1)+"</a></li>"+
//                 "<li class=\"next\"><a href=\"javascript:getPage("+parseInt(currNum+1)+")\">下一页</a></li>";
//         }
//
//         $(".fenye").append(ulDetail);
//
//     }
//     function choosele(num,cur){
//         if(num==cur){
//             return " choose";
//         }else{
//             return "";
//         }
//     }





	// $(".mainmenu-area").sticky({topSpacing:0});
    $('.product-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    });


    $('.related-products-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    });

    $('.brand-list').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });


    // Bootstrap Mobile Menu fix
    $(".navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass('in');
    });

    // jQuery Scroll effect
    $('.navbar-nav li a, .scroll-to-up').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = $('.header-area').outerHeight();
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    // Bootstrap ScrollPSY
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 95
    });

    $(".wc-forward").on("click",function(){
    // alert(1)
        location.href = "https://www.baidu.com"
});

    // $("#videoButton").on("click",function(){
    //
    //     if($("#video").attr("class")=="play"){
    //         $("#video")[0].play();
    //         $(this).attr("src","img/pause.png")
    //         $("#video").removeClass("play")
    //         // $("#videoButton").css("display","none")
    //     }else{
    //         $("#video")[0].pause();
    //         $(this).attr("src","img/play.png")
    //         $("#video").addClass("play")
    //     }
    // })
    // $(".videoFrame").on("mouseover",function(){
    //     $("#videoButton").css("display","block")
    // })
    // $(".videoFrame").on("mouseout",function(){
    //     $("#videoButton").css("display","none")
    // })

});

