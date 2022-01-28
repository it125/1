$(function () {
    $('.search-close').on({
        "click" : function() {
            // 햄버거 메뉴 버튼이 보일 때 (visible 상태인지 아닌지)
            if($('.search-active').is(":visible")) {
                // 모바일 닫기 
                $(".search-close").show();
                
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

});
