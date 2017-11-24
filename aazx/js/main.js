$(function(){
    //登录
    $(".login").on("click", function (){
        $(".zhezhao").css("display","block")
        $(".htmleaf-container").removeClass("list2").addClass("list")
    })
    $(".logins").on("click", function (){
        $(".zhezhao_register").css("display","none")
        $(".zhezhao").css("display","block")
        // $(".htmleaf-container").removeClass("list2").addClass("list")
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
    changeImg()
    //shop页的刷选

    $(":radio").click(function(){
        var data=$(this).val()
        checkShops(data)
    });

    function checkShops(value){
        $(".single-product-area .row div.col-md-3").each(function(){
            if($(this).hasClass(value)){
                // alert($(this).attr("class"))
                $(this).css("display","block")
            }else{
                $(this).css("display","none")
            }
        });
    }

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

