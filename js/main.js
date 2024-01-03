// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
//         document.querySelector("body").style.overflow = "hidden";
//         document.querySelector(".loading").style.visibility = "visible";
//     } else {
//         $(".loading").fadeOut();
//         document.querySelector("body").style.overflow = "visible";
//     }
// };

$(document).ready(function () {
    $("nav .taps>li").hover(function () {
        $(this).find(".drop").slideDown()
    }
        , function () {
            $(this).find(".drop").css("display", "none")
        })


    $(".categories .btn").hover(function () {
        let order = "." + $(this).attr("target");
        let sCase = $(order).attr("case");
        console.log(sCase)
        if(sCase=="off"){
            $("nav .taps>li .big-drop .child .container .show .slide-con").slideUp();
            $("nav .taps>li .big-drop .child .container .show .slide-con").attr("case","off");
            $(order).attr("case","on");
            $(order).slideDown();
        }
    }, function () {
        cancel();
    }
    )
})

