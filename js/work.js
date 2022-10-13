$("document").ready(function(){
    $(".content a").click(function(){
        let i = $(".content a").index(this)
        $(".content .right").show().find("img").attr("src", "images/wprocess-"+(i+1)+".jpg")
    })

    AOS.init();


    // $(".content a").eq(0).addClass("on");

    // $(".content a").click(function(){
    //     let i=$(".content a").index(this)
    //     $(".img-content a img").hide().eq(i).fadeIn();

    //     $(".content a").removeClass("on").eq(i).addClass("on");
    // })

    
})