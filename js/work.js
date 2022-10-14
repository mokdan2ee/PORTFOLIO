$("document").ready(function(){
    $(".content a").eq(0).css("background-image", "url(images/work-"+(1)+".png)")
    $(".content a").click(function(){
        let i = $(".content a").index(this)
        $(".content .right").show().find("img").attr("src", "images/wprocess-"+(i+1)+".jpg")

        for(let k = 0; k < 4; k++){
            $(".content a").eq(k).css("background-image", "url(images/work-"+(k+1)+"-black0x.png)")
        }
        $(".content a").eq(i).css("background-image", "url(images/work-"+(i+1)+".png)")



        // $(".content a").removeClass("on")
        // $(this).addClass("on")
        // $(this).css("background-image", `url(${$(this).hasClass("on")? "images/work-"+(i+1)+".png" : "images/work-"+(i+1)+"-black0x.png"})`)
    })

    $(".content a").mouseover(function(){
        let i = $(".content a").index(this)

        for(let k = 0; k < 4; k++){
            $(".content a").eq(k).css("background-image", "url(images/work-"+(k+1)+"-black0x.png)")
        }
        $(".content a").eq(i).css("background-image", "url(images/work-"+(i+1)+".png)")
    })

    AOS.init();


    // $(".content a").eq(0).addClass("on");

    // $(".content a").click(function(){
    //     let i=$(".content a").index(this)
    //     $(".img-content a img").hide().eq(i).fadeIn();

    //     $(".content a").removeClass("on").eq(i).addClass("on");
    // })

    
})