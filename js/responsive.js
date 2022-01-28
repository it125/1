$(function () {
    var gnbFlag = false;
    var gnbIndex;


    // // 하위메뉴 안 보이게
    // $(".lnb_container").on({
    //     "mouseleave": function () {
    //         if (gnbFlag) {
    //             $(".lnb_container").removeClass("appear");
    //             $(".lnb_container").addClass("disappear");
    //             $(".lnb_container").hide();
    //             $(".active_bar").hide();

    //         } else {
    //             return;
    //         }
    //     }
    // });

    $(".hamburger").on({
        "click" : function() {
            // 햄버거 메뉴 버튼이 보일 때 (visible 상태인지 아닌지)
            if($(".mobile.hamburger").is(":visible")) {
                // 모바일 닫기 
                $(".mobile.hamburger").hide();
                $(".mobile.close").show();
                // 모바일 전체 메뉴
                $("#main_header").height(60);
                $("#main_header #search_box").hide();
                $("#main_content").hide();
                $("#main_footer").hide();
                
                $("#mobile_menu").empty(); // #mobile_menu 하위 태그 초기화
                $(".nav li").eq(3).show(); // mobile에서만 보임
                $(".nav li").eq(4).show();

                var nav = $(".nav").clone();
                $("#mobile_menu").append(nav);
                $("#mobile_menu").show();
            } else {
                // 닫기 메뉴 버튼이 보일 때
                // 모바일 햄버거 버튼 show
                $(".mobile.hamburger").show();
                $('.mobile.close').hide();

                // 모바일 전체메뉴 show
                $("#main_header").height(390);
                $("#main_header #search_box").show();
                $("#main_content").show();
                $("#main_footer").show();
                $("#mobile_menu").hide();
            }
        }
    });

    $(window).resize(function() {
        var width = $(window).width();

        if(width >= 767) {
            $(".nav li").eq(3).hide(); 
            $(".nav li").eq(4).hide();
        }

        if($("#mobile_menu").is(":visible")) {
            $(".mobile.hamburger").show();
            $('.mobile.close').hide();

            $("#main_header").height(390);
            $("#main_header #search_box").show();
            $("#main_content").show();
            $("#main_footer").show();
            $("#mobile_menu").hide();
        }
    })
});
