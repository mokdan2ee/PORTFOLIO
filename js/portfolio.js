$("document").ready(function(){
    let page = new fullpage(".fullpage",{
        anchors : ["웹1", "웹2", "앱1"],
        slidesNavigation: true,
        normalScrollElements: '.modal-content',
        onLeave:function(origin, destination,direction){
            // 구역을 떠나고 새로운 구역으로 이동 도중 이벤트 실행
            // origin - 활성화된 구역
            // destination - 목적지 구역
            // direction - 마우스 휠 방향
            $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
        },
        afterLoad: function(origin, destination){
            if(destination.index == 0){
                $("#fp-nav ul li .fp-tooltip").eq(destination.index).addClass("on")
                $(".section").eq(0).find(".ani").addClass("aos-init aos-animate")
            }
            if(destination.index == 1){
                $(".section").eq(1).find(".ani").addClass("aos-init aos-animate")
            }
            if(destination.index == 2){
                $(".section").eq(2).find(".ani").addClass("aos-init aos-animate")
            }
            // 구역을 불러들이고 나서 스크롤이 끝나면 이벤트가 실행
        }
    })

    
    $(".btn3").click(function(e){
        e.preventDefault();
        let i = $(".btn3").index(this);
        $(".modal-content").show()
        $(".modal-content img").attr("src", "images/process-"+(i+1)+".jpg");
    })
    $(".modal-content a").click(function(e){
        e.preventDefault();
        $(".modal-content").hide()
    })
})